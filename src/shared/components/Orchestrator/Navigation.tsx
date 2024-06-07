import { fr } from '@codegouvfr/react-dsfr'
import Button from '@codegouvfr/react-dsfr/Button'
import type { InternalPageType } from 'model/Page'
import { useMemo, useState, type PropsWithChildren } from 'react'
import { useStyles } from 'tss-react'
import type { OrchestratorProps } from './Orchestrator'
import { SequenceHeader } from './SequenceHeader'
import type { LunaticOverview } from './utils/lunaticType'

export function Navigation(
  props: PropsWithChildren<{
    currentPage: InternalPageType
    handlePreviousClick: () => void
    handleNextClick: () => void
    handleDownloadData: () => void
    handleDepositProofClick: () => Promise<void>
    mode: OrchestratorProps['mode']
    pagination: 'question' | 'sequence'
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

  const { cx } = useStyles()

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

  const displaySequenceHeader = !isSequencePage && currentPage === 'lunaticPage'

  return (
    <>
      {!isPreviousButtonDisplayed && (
        <div className={fr.cx('fr-grid-row', 'fr-mt-1w')}>
          <div className={fr.cx('fr-container')}>
            {displaySequenceHeader && (
              <SequenceHeader overview={overview} pagination={pagination} />
            )}
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
          </div>
        </div>
      )}

      <div className={fr.cx('fr-container')}>
        <div className={fr.cx('fr-grid-row', 'fr-grid-row--center')}>
          <div
            className={cx(
              fr.cx('fr-col-12', 'fr-mb-10v'),
              !(isLayoutExpanded && currentPage === 'lunaticPage') &&
                fr.cx('fr-col-md-9', 'fr-col-lg-8')
            )}
          >
            {pagination === 'sequence' && currentPage === 'lunaticPage' && (
              <div style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
                <Button
                  iconId={
                    isLayoutExpanded
                      ? 'ri-collapse-diagonal-line'
                      : 'ri-expand-diagonal-line'
                  }
                  priority="tertiary"
                  onClick={() => setIsLayoutExpanded((expanded) => !expanded)}
                  title="Étendre la vue"
                />
              </div>
            )}
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
            {mode === 'visualize' && (
              <div style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
                <Button
                  iconId="ri-download-2-line"
                  priority="tertiary no outline"
                  onClick={handleDownloadData}
                  title="Télécharger les données"
                >
                  Télécharger les données
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
