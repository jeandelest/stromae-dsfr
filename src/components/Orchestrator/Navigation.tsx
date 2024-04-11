import Button from '@codegouvfr/react-dsfr/Button'
import { Stepper } from '@codegouvfr/react-dsfr/Stepper'
import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup'
import type { InternalPageType } from 'model/Page'
import { useMemo, useState, type PropsWithChildren } from 'react'
import type { OrchestratorProps } from './Orchestrator'
import { fr } from '@codegouvfr/react-dsfr'
import type { LunaticOverview } from './utils/lunaticType'

export function Navigation(
  props: PropsWithChildren<{
    currentPage: InternalPageType
    handlePreviousClick: () => void
    handleNextClick: () => void
    handleDownloadData: () => void
    handleDepositProofClick: () => Promise<void>
    mode: OrchestratorProps['mode']
    pagination: 'question' | 'sequence' | 'subsequence'
    overview: LunaticOverview
    isSequencePage: boolean
  }>
) {
  const {
    currentPage,
    handleNextClick,
    handlePreviousClick,
    handleDownloadData,
    handleDepositProofClick,
    mode,
    children,
    pagination,
    overview,
    isSequencePage,
  } = props

  const nextLabel = useMemo(() => {
    switch (currentPage) {
      case 'welcomePage':
        return 'Commencer'
      case 'lunaticPage':
        return 'Continuer'
      case 'endPage':
        return "Télécharger l'accusé de réception"
      case 'validationPage':
        return 'Envoyer mes réponses'
    }
  }, [currentPage])

  const isPreviousButtonDisplayed = ['welcomePage', 'endPage'].includes(
    currentPage
  )

  const [isLayoutExpanded, setIsLayoutExpanded] = useState<boolean>(false)

  const currentSequence = findLatestReachedElement(overview)

  const displaySequenceSteeper =
    !isSequencePage &&
    currentPage === 'lunaticPage' &&
    overview.length > 0 &&
    currentSequence

  return (
    <>
      {!isPreviousButtonDisplayed && (
        <div className={fr.cx('fr-grid-row')}>
          <div className={fr.cx('fr-container')}>
            <Button
              id="button-precedent"
              title="Revenir à l'étape précédente"
              priority="tertiary no outline"
              iconId="fr-icon-arrow-left-line"
              onClick={handlePreviousClick}
              disabled={isPreviousButtonDisplayed}
            >
              Précédent
            </Button>
            {displaySequenceSteeper && (
              <Stepper
                currentStep={currentSequence.index}
                stepCount={overview.length}
                title={currentSequence.element.label}
                className={fr.cx('fr-mx-1w')}
              />
            )}
          </div>
        </div>
      )}

      <div className={fr.cx('fr-container')}>
        <div className={fr.cx('fr-grid-row', 'fr-grid-row--center')}>
          <div className={fr.cx(isLayoutExpanded ? 'fr-col-12' : 'fr-col-8')}>
            <div style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
              {pagination === 'sequence' && currentPage === 'lunaticPage' && (
                <Button
                  iconId="ri-expand-diagonal-line"
                  priority="tertiary no outline"
                  onClick={() => setIsLayoutExpanded((expanded) => !expanded)}
                  title="Étendre la vue"
                />
              )}
            </div>
            {children}
            <Button
              priority="primary"
              title={"Passer à l'étape suivante"}
              id="continue-button"
              onClick={
                currentPage === 'endPage'
                  ? handleDepositProofClick
                  : handleNextClick
              }
            >
              {nextLabel}
            </Button>
          </div>
        </div>
      </div>
      {mode === 'visualize' && (
        <ButtonsGroup
          buttons={[
            {
              children: 'Télécharger les données',
              priority: 'tertiary no outline',
              id: 'button-saveData',
              iconId: 'ri-download-2-line',
              onClick: handleDownloadData,
            },
          ]}
          alignment="right"
          buttonsEquisized={true}
        />
      )}
    </>
  )
}

/**
 * function will be deleted when lunatic will add currentSequence boolean in overview
 */
function findLatestReachedElement(array: LunaticOverview) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i].reached === true) {
      return { index: i + 1, element: array[i] }
    }
  }
  // If no element with reached true is found, return null or handle accordingly
  return null
}
