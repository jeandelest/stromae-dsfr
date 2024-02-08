import { useState } from 'react'
import type { PageType } from './type'

type Params = {
  isFirstPage: boolean
  isLastPage: boolean
  initialCurrentPage: string | undefined
  goNextLunatic: () => void
  goPrevLunatic: () => void
}

export function useStromaeNavigation({
  isFirstPage,
  isLastPage,
  goNextLunatic,
  goPrevLunatic,
  initialCurrentPage,
}: Params) {
  
  const getInitialCurrentPage = () => {
    switch (initialCurrentPage) {
      case undefined:
        return 'welcomePage'
      case 'welcomePage':
      case 'validationPage':
      case 'endPage':
        return initialCurrentPage
      default:
        //string value (pageTag in fact)
        return 'lunaticPage'
    }
  }

  const [currentPage, setCurrentPage] = useState<PageType>(
    getInitialCurrentPage //Avoiding recreating the initialState https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state
  )

  const goNext = () => {
    switch (currentPage) {
      case 'validationPage':
        return setCurrentPage('validationModal')
      case 'validationModal':
        return setCurrentPage('endPage')
      case 'welcomePage':
        return setCurrentPage('lunaticPage')
      case 'lunaticPage':
        return isLastPage ? setCurrentPage('validationPage') : goNextLunatic()
      case 'endPage':
        return setCurrentPage('downloadPage')
    }
  }
  const goPrevious = () => {
    switch (currentPage) {
      case 'validationPage':
        return setCurrentPage('lunaticPage')
      case 'validationModal':
        return setCurrentPage('validationPage')
      case 'lunaticPage':
        return isFirstPage ? setCurrentPage('welcomePage') : goPrevLunatic()
    }
  }

  return { goNext, goPrevious, currentPage: currentPage }
}
