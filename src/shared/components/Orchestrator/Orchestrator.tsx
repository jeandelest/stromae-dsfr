import {
  useLunatic,
  LunaticComponents,
  type LunaticSource,
  type LunaticError,
  type LunaticData,
} from '@inseefr/lunatic'
import { useEffect, useRef } from 'react'
import { fr } from '@codegouvfr/react-dsfr'
import { downloadAsJson } from 'utils/downloadAsJson'
import { useNavigate } from '@tanstack/react-router'
import { Welcome } from './CustomPages/Welcome'
import { Navigation } from './Navigation'
import { useState } from 'react'
import { Validation } from './CustomPages/Validation'
import { useStromaeNavigation } from './useStromaeNavigation'
import { EndPage } from './CustomPages/EndPage'
import { ValidationModal } from './CustomPages/ValidationModal'
import type { SurveyUnitData } from 'model/SurveyUnitData'
import type { StateData } from 'model/StateData'
import { isBlockingError, isSameErrors } from './utils/controls'
import { slotComponents } from './slotComponents'
import type { LunaticGetReferentiel } from './utils/lunaticType'
import { useRefSync } from 'utils/useRefSync'
import { isSequencePage } from './utils/sequence'
import { scrollToFirstError } from './utils/scrollToFirstError'
import { isObjectEmpty } from 'utils/isObjectEmpty'
import { useAddPreLogoutAction } from 'shared/hooks/prelogout'
import { useUpdateEffect } from 'utils/useUpdateEffect'

export type OrchestratorProps = OrchestratorProps.Common &
  (OrchestratorProps.Visualize | OrchestratorProps.Collect)

export namespace OrchestratorProps {
  export type Common = {
    source: LunaticSource
    surveyUnitData?: SurveyUnitData
    getReferentiel: LunaticGetReferentiel
  }

  export type Visualize = {
    mode: 'visualize'
  }

  export type Collect = {
    mode: 'collect'
    updateDataAndStateData: (params: {
      stateData: StateData
      data: LunaticData['COLLECTED']
      onSuccess?: () => void
    }) => void
    getDepositProof: () => Promise<void>
  }
}

export function Orchestrator(props: OrchestratorProps) {
  const { source, surveyUnitData, getReferentiel, mode } = props

  const initialCurrentPage = surveyUnitData?.stateData?.currentPage

  const pagination = source.pagination ?? 'question'

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
    getChangedData,
    resetChangedData,
    overview,
  } = useLunatic(source, surveyUnitData?.data, {
    activeControls: true,
    getReferentiel,
    autoSuggesterLoading: true,
    trackChanges: mode === 'collect',
    withOverview: true,
  })

  const [activeErrors, setActiveErrors] = useState<
    Record<string, LunaticError[]> | undefined
  >(undefined)

  useEffect(() => {
    if (activeErrors) {
      scrollToFirstError()
    }
  }, [activeErrors])

  const validationModalActionsRef = useRef({
    open: () => Promise.resolve(),
  })

  // Decorates goNext function with controls behavior
  const goNextWithControls = () => {
    const { currentErrors } = compileControls()

    // No errors, continue
    if (!currentErrors) {
      setActiveErrors(undefined)
      goNextLunatic()
      return
    }

    // An error is blocking, we stay on the page
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
    goNextLunatic: goNextWithControls,
    goPrevLunatic,
    isFirstPage,
    isLastPage,
    goToLunaticPage,
    initialCurrentPage,
    openValidationModal: () => validationModalActionsRef.current.open(),
    mode,
  })

  const getCurrentStateData = (): StateData => {
    switch (currentPage) {
      case 'endPage':
        return { date: Date.now(), currentPage, state: 'VALIDATED' }
      case 'lunaticPage':
        return { date: Date.now(), currentPage: pageTag, state: 'INIT' }
      case 'validationPage':
      case 'welcomePage':
      default:
        return { date: Date.now(), currentPage, state: 'INIT' }
    }
  }

  const downloadAsJsonRef = useRefSync(() => {
    downloadAsJson<SurveyUnitData>({
      dataToDownload: {
        data: getData(false),
        stateData: getCurrentStateData(),
        personalization: surveyUnitData?.personalization,
      },
      //The label of source is not dynamic
      filename: `${source.label?.value}-${new Date().toLocaleDateString()}`,
    })
  })

  useAddPreLogoutAction(() => {
    if (mode !== 'collect') return

    const { updateDataAndStateData } = props

    const data = getChangedData()

    updateDataAndStateData({
      stateData: getCurrentStateData(),
      data: isObjectEmpty(data.COLLECTED ?? {}) ? undefined : data.COLLECTED,
      onSuccess: resetChangedData,
    })
  })
  // Persist data and stateData when page change in "collect" mode
  useUpdateEffect(() => {
    if (mode !== 'collect') return
    const { updateDataAndStateData } = props

    const data = getChangedData()

    updateDataAndStateData({
      stateData: getCurrentStateData(),
      data: isObjectEmpty(data.COLLECTED ?? {}) ? undefined : data.COLLECTED,
      onSuccess: resetChangedData,
    })
  }, [currentPage, pageTag])

  const navigate = useNavigate()

  const handleDepositProofClick = async () => {
    switch (mode) {
      case 'visualize': {
        downloadAsJsonRef.current()
        navigate({ to: '/visualize', params: {} })
        break
      }
      case 'collect': {
        return props.getDepositProof()
      }
    }
  }

  const components = getComponents({
    except: pagination === 'sequence' ? 'Sequence' : undefined,
  })

  return (
    <div className={fr.cx('fr-container--fluid')}>
      <Provider>
        <div>
          <Navigation
            handleNextClick={goNext}
            handlePreviousClick={goPrevious}
            handleDownloadData={downloadAsJsonRef.current}
            currentPage={currentPage}
            mode={mode}
            handleDepositProofClick={handleDepositProofClick}
            pagination={pagination}
            overview={overview}
            isSequencePage={isSequencePage(components)}
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
                  components={components}
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
              <ValidationModal actionsRef={validationModalActionsRef} />
            </div>
          </Navigation>
        </div>
      </Provider>
    </div>
  )
}
