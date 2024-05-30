import { fr } from '@codegouvfr/react-dsfr'

export function EndPage(props: { date: number | undefined }) {
  const { date = Date.now() } = props
  const formatedData = new Date(date).toLocaleString()
  return (
    <div className={fr.cx('fr-my-4w')}>
      <h1>Nous vous remercions pour votre collaboration à cette enquête.</h1>
      <p>Vos réponses ont été envoyées le {formatedData}.</p>
    </div>
  )
}
