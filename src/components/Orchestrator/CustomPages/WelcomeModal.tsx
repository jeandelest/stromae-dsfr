import { createModal } from '@codegouvfr/react-dsfr/Modal'
import { useId, useState } from 'react'

export function WelcomeModal(props: { goBack: () => void }) {
  const { goBack } = props
  const id = useId()

  const [modal] = useState(() =>
    createModal({
      id: `welcomeModal-${id}`,
      isOpenedByDefault: true,
    })
  )
  return <modal.Component
    title="Bienvenue "
    buttons={[
      {
        doClosesModal: true, //Default true, clicking a button close the modal.
        children: 'Revenir à la première page',
      },
      {
        doClosesModal: true,
        children: "Reprendre la où j'en étais",
        onClick: goBack,
      },
    ]}
    concealingBackdrop={true}
  >
    Vous avez déjà commencé à renseigner le questionnaire. Souhaitez-vous reprendre la vous en étiez ou revenir à la première page ?
  </modal.Component >
}