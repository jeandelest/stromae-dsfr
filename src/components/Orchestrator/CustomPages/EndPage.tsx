export function EndPage(props: { date: number }) {
  const { date } = props
  return (
    <>
      <h1>L’Insee vous remercie pour votre collaboration à cette enquête.</h1>
      <p>Vos réponses ont été envoyées le {date} </p>
      <p>
        Si vous avez indiqué une adresse électronique, un accusé de réception
        vous sera envoyé automatiquement.{' '}
      </p>
    </>
  )
}
