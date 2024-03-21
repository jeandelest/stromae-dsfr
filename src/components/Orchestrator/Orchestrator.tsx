import {
  useLunatic,
  LunaticComponents,
  type LunaticSource,
  type LunaticError,
} from '@inseefr/lunatic'
import { fr } from '@codegouvfr/react-dsfr'
import { downloadAsJson } from 'utils/downloadAsJson'
import { useNavigate } from '@tanstack/react-router'
import { Welcome } from './CustomPages/Welcome'
import { Navigation } from './Navigation'
import { useEffect, useState } from 'react'
import { Validation } from './CustomPages/Validation'
import { useStromaeNavigation } from './useStromaeNavigation'
import { EndPage } from './CustomPages/EndPage'
import { ValidationModal } from './CustomPages/ValidationModal'
import { assert } from 'tsafe/assert'
import type { SurveyUnitData } from 'model/SurveyUnitData'
import type { StateData } from 'model/StateData'
import { isBlockingError, isSameErrors } from './utils/controls'
import { slotComponents } from './slotComponents'

export function Orchestrator(props: {
  source: LunaticSource
  surveyUnitData?: SurveyUnitData
  getReferentiel?: (name: string) => Promise<Array<unknown>>
}) {
  const { source, surveyUnitData, getReferentiel } = props
  const navigate = useNavigate()

  const initialCurrentPage = surveyUnitData?.stateData?.currentPage

  const {
    getComponents,
    Provider,
    compileControls,
    goPreviousPage: goPrevLunatic,
    goNextPage: goNextLunatic,
    getData,
    isFirstPage,
    isLastPage,
    pageTag,
    goToPage: goToLunaticPage,
  } = useLunatic(source, surveyUnitData?.data, {
    activeControls: true,
    getReferentiel,
    autoSuggesterLoading: true,
  })

  const [activeErrors, setActiveErrors] = useState<
    Record<string, LunaticError[]> | undefined
  >(undefined)

  const [validationModalActions] = useState<{
    open?: () => Promise<void>
  }>({})

  const goNextHandlingControls = () => {
    const { currentErrors } = compileControls()

    //No errors, we goNext
    if (!currentErrors) {
      setActiveErrors(undefined)
      goNextLunatic()
      return
    }

    //An error is blocking, we stay on the page
    if (isBlockingError(currentErrors)) {
      //compileControls returns isCritical but I prefer define my own rules of blocking error in the orchestrator
      setActiveErrors(currentErrors)
      return
    }

    // activeErrors and currentErrors are the same and no blocking error, we go next
    if (isSameErrors(currentErrors, activeErrors)) {
      setActiveErrors(undefined)
      goNextLunatic()
      return
    }

    setActiveErrors(currentErrors)
  }

  const { currentPage, goNext, goToPage, goPrevious } = useStromaeNavigation({
    goNextLunatic: goNextHandlingControls,
    goPrevLunatic,
    isFirstPage,
    isLastPage,
    goToLunaticPage,
    initialCurrentPage,
    openValidationModal: () => {
      assert(validationModalActions.open !== undefined)
      return validationModalActions.open()
    },
  })

  const getCurrentStateData = (): StateData => {
    switch (currentPage) {
      case 'endPage':
        return { date: Date.now(), currentPage, state: 'VALIDATED' }
      case 'lunaticPage':
        return { date: Date.now(), currentPage: pageTag, state: 'INIT' }
      case 'downloadPage':
        //downloadPage is not really a page, this is only use internally to manage state
        return { date: Date.now(), currentPage: 'endPage', state: 'VALIDATED' }
      case 'validationPage':
      case 'welcomePage':
      default:
        return { date: Date.now(), currentPage, state: 'INIT' }
    }
  }

  function handleDownloadData() {
    downloadAsJson<SurveyUnitData>({
      dataToDownload: {
        data: getData(false),
        stateData: getCurrentStateData(),
        personalization: surveyUnitData?.personalization,
      },
      //The label of source is not dynamic 
      filename: `${source.label.value}-${new Date().toLocaleDateString()}`,
    })
  }

  const isDownloadPage = currentPage === 'downloadPage'

  useEffect(() => {
    if (!isDownloadPage) return
    handleDownloadData()
    navigate({ to: '/visualize' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDownloadPage])

  return (
    <div className={fr.cx('fr-container--fluid', 'fr-mt-1w', 'fr-mb-7w')}>
      <Provider>
        <div className={fr.cx('fr-col-12', 'fr-container')}>
          <Navigation
            handleNextClick={goNext}
            handlePreviousClick={goPrevious}
            handleDownloadData={handleDownloadData}
            currentPage={currentPage}
          >
            <div className={fr.cx('fr-mb-4v')}>
              {currentPage === 'welcomePage' && (
                <Welcome
                  initialCurrentPage={initialCurrentPage}
                  goToPage={goToPage}
                />
              )}
              {currentPage === 'lunaticPage' && (
                <LunaticComponents
                  autoFocusKey={pageTag}
                  components={getComponents()}
                  slots={slotComponents}
                  componentProps={() => ({
                    errors: activeErrors,
                  })}
                />
              )}
              {currentPage === 'validationPage' && <Validation />}
              {currentPage === 'endPage' && (
                <EndPage date={surveyUnitData?.stateData?.date} />
              )}
              <ValidationModal actions={validationModalActions} />
            </div>
          </Navigation>
        </div>
      </Provider>
    </div>
  )
}
