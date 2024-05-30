import { fr } from '@codegouvfr/react-dsfr'

export function Validation() {
  return (
    <div className={fr.cx('fr-my-4w')}>
      <h1>Vous êtes arrivé à la fin du questionnaire</h1>
      <p>
        Après envoi, vous ne pourrez plus modifier vos réponses et vous pourrez
        télécharger un accusé de réception.
      </p>
    </div>
  )
}
