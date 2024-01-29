import {
  type LunaticData,
  type LunaticSource,
  useLunatic,
  LunaticComponents,
} from '@inseefr/lunatic';
import * as custom from '@inseefr/lunatic-dsfr';
import { useStyles } from "tss-react/dsfr"

import { data, source } from "./source"
import Button from '@codegouvfr/react-dsfr/Button';
import { fr } from '@codegouvfr/react-dsfr';
import { Grid } from 'components/Grid';

export function Orchestrator() {
  const { getComponents, Provider, goPreviousPage, goNextPage, isFirstPage, isLastPage } = useLunatic(source, data, {
    initialPage: '1',
    custom
  });

  const { css } = useStyles()
  return (
    <div className={fr.cx('fr-container--fluid')}>
      <Provider>
        <Button
          id="button-precedent"
          title="Revenir à l'étape précédente"
          priority="tertiary no outline"
          iconId="fr-icon-arrow-left-line"
          onClick={goPreviousPage}
          disabled={isFirstPage}
          className={css({ visibility: isFirstPage ? "hidden" : "visible" })}
        >
          Précédent
        </Button>
        <Grid className={"fr-container"}>
          <LunaticComponents components={getComponents()} wrapper={({ children, id }) => (
            <div className={fr.cx('fr-mb-1w')}>{children}</div>
          )} />
          <Button
            priority="primary"
            //title={getButtonTitle(getComponents)}
            nativeButtonProps={{
              //'aria-disabled': waiting || saving,
            }}
            id="continue-button"
            onClick={goNextPage}
          >
            Continuer
          </Button>
        </Grid>

      </Provider>
    </div >
  );
}