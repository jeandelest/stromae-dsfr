import { AxiosError } from 'axios'
import { NotFoundError } from './notFoundError'

//TODO i18n.
export function getErrorInformations(error: unknown) {
  if (error instanceof NotFoundError) {
    return {
      title: 'Page non trouvée',
      subtitle:
        'La page que vous cherchez est introuvable. Excusez-nous pour la gêne occasionnée.',
      paragraph:
        'Si vous avez tapé l’adresse web dans le navigateur, vérifiez qu’elle est correcte. La page n’est peut-être plus disponible. Dans ce cas, pour continuer votre visite vous pouvez retourner sur la page d’accueil. Sinon contactez-nous pour que l’on puisse vous aider.',
      code: 404, //not sure this code is technically correct but present in mockup
    }
  }

  if (error instanceof AxiosError) {
    if (!error.response) {
      return {
        title: 'Erreur de connexion',
        subtitle: "Une erreur s'est produite lors de la connexion au serveur.",
        paragraph:
          "Veuillez vérifier votre connexion Internet et réessayer. Si le problème persiste, veuillez contacter votre fournisseur de services Internet ou l'administrateur du site pour obtenir de l'aide.",
      }
    }
    const status = error.response.status
    switch (status) {
      case 404:
        return {
          title: 'Ressource non trouvée',
          subtitle:
            'La ressource que vous cherchez est introuvable sur le serveur.',
          paragraph:
            'Veuillez vérifier l’URL que vous avez saisie ou contactez l’administrateur du site pour obtenir de l’aide.',
          code: status,
        }
      case 401:
        return {
          title: 'Non autorisé',
          subtitle:
            'Vous n’avez pas l’autorisation d’accéder à cette ressource.',
          paragraph:
            'Veuillez vous connecter avec les informations appropriées ou contacter l’administrateur du site pour obtenir de l’aide.',
          code: status,
        }
      case 403:
        return {
          title: 'Accès refusé',
          subtitle: 'Vous n’êtes pas autorisé à accéder à cette ressource.',
          paragraph:
            'Veuillez contacter l’administrateur du site pour obtenir de l’aide.',
          code: status,
        }
      case 400:
        return {
          title: 'Requête incorrecte',
          subtitle:
            'La requête que vous avez envoyée est incorrecte ou malformée.',
          paragraph:
            'Veuillez vérifier les données que vous avez envoyées et réessayer.',
          code: status,
        }
      case 500:
        return {
          title: 'Erreur interne du serveur',
          subtitle:
            'Une erreur est survenue du côté du serveur. Veuillez réessayer ultérieurement.',
          paragraph:
            'Si le problème persiste, veuillez contacter l’administrateur du site pour obtenir de l’aide.',
          code: status,
        }
      default:
        return {
          title: 'Erreur non gérée',
          subtitle: "Une erreur s'est produite lors de la requête.",
          paragraph:
            "Veuillez réessayer ultérieurement ou contacter l'administrateur du site pour obtenir de l'aide.",
          code: status,
        }
    }
  }
  return {
    title: 'Erreur inconnue',
    subtitle: "Une erreur inattendue s'est produite.",
    paragraph:
      "Veuillez réessayer ultérieurement ou contacter l'administrateur du site pour obtenir de l'aide.",
  }
}
