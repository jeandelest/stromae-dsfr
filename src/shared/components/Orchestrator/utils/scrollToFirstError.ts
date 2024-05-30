export function scrollToFirstError() {
  const errorElement = document.querySelector('.fr-fieldset--error')
  if (errorElement) {
    errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
