import { fr } from "@codegouvfr/react-dsfr";
import { Orchestrator } from "components/Orchestrator/Orchestrator";
import {source } from "./source"
import type { LunaticSource } from "@inseefr/lunatic";
export function OrchestratorPage() {

  return (
    <div className={fr.cx("fr-mt-2w", "fr-mb-7w")}>
      <Orchestrator source={source as LunaticSource} />
    </div>)
}