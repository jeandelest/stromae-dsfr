import {
  useLunatic,
  LunaticComponents,
  type LunaticSource,
  type LunaticData,
} from '@inseefr/lunatic';
import * as custom from '@inseefr/lunatic-dsfr';
import { useStyles } from "tss-react/dsfr"
import Button from '@codegouvfr/react-dsfr/Button';
import { fr } from '@codegouvfr/react-dsfr';
import { Grid } from 'components/Grid';
import { useMemo, type PropsWithChildren } from 'react';

export function Orchestrator(props: { source: LunaticSource, data?: LunaticData }) {
  const { source, data } = props
  const { getComponents, Provider, goPreviousPage, goNextPage, isFirstPage, isLastPage } = useLunatic(source, data, {
    // @ts-expect-error need some work on lunatic-dsfr to remove this
    custom
  });


  return (
    <div className={fr.cx('fr-container--fluid', "fr-mt-1w", "fr-mb-7w")}>
      <Provider>
        <div className={fr.cx("fr-col-12", "fr-container")}>
          <Navigation handleNextClick={goNextPage} handlePreviousClick={goPreviousPage} isFirstPage={isFirstPage} isLastPage={isLastPage} >
            <LunaticComponents components={getComponents()} wrapper={({ children }) => (
              <div className={fr.cx('fr-mb-1w')}>{children}</div>
            )} />
          </Navigation>
        </div>
      </Provider>
    </div >
  );
}

function Navigation(props: PropsWithChildren<{ isFirstPage: boolean, isLastPage: boolean, handlePreviousClick: () => void, handleNextClick: () => void }>) {
  const { isFirstPage, isLastPage, handleNextClick, handlePreviousClick, children } = props
  const { css } = useStyles()

  const nextLabel = useMemo(() => {
    if (isFirstPage) {
      return 'Commencer';
    }
    if (isLastPage) {
      return 'Envoyer mes réponses';
    }
    return 'Continuer';

  }, [isFirstPage, isLastPage]);


  return (
    <>
      <Button
        id="button-precedent"
        title="Revenir à l'étape précédente"
        priority="tertiary no outline"
        iconId="fr-icon-arrow-left-line"
        onClick={handlePreviousClick}
        disabled={isFirstPage}
        className={css({ visibility: isFirstPage ? "hidden" : "visible" })}
      >
        Précédent
      </Button>
      <Grid>
        {children}
        <Button
          priority="primary"
          title={"Passer à l'étape suivante"}
          id="continue-button"
          onClick={handleNextClick}
        >
          {nextLabel}
        </Button>
      </Grid>
    </>
  )
}