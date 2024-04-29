import { fr } from '@codegouvfr/react-dsfr'

export function EndPage(props: { date: number | undefined }) {
  const { date = Date.now() } = props
  const formatedData = new Date(date).toLocaleString()
  return (
    <div className={fr.cx('fr-my-4w')}>
      <h1>L’Insee vous remercie pour votre collaboration à cette enquête.</h1>
      <p>Vos réponses ont été envoyées le {formatedData}.</p>
      <p>
        Si vous avez indiqué une adresse électronique, un accusé de réception
        vous sera envoyé automatiquement.{' '}
      </p>
    </div>
  )
}
