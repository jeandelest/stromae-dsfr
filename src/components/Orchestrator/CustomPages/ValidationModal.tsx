import { createModal } from "@codegouvfr/react-dsfr/Modal";

const modal = createModal({
  id: "validationModal",
  isOpenedByDefault: false
});

export function ValidationModal(props: { goPrevious: () => void, goNext: () => void }) {
  const { goNext, goPrevious } = props
  return <modal.Component title="Voulez vous envoyer vos réponses" buttons={
    [
      {
        doClosesModal: true, //Default true, clicking a button close the modal.
        children: "Annuler",
        onClick: goPrevious
      },
      {
        doClosesModal: true,
        onClick: goNext,
        children: "Envoyer mes réponses"
      }
    ]
  }
    concealingBackdrop={false}
  >
    Vous êtes sur le point d'envoyer vos réponses au questionnaire. Après envoi, vous ne pourrez plus modifier vos réponses
  </modal.Component>
}
export function openValidationModal() { modal.open() }