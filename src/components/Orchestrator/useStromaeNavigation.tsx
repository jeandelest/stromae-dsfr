import { useState } from 'react'
import type { PageType } from './type'
import { assert, type Equals } from 'tsafe/assert'
import type { useLunatic } from '@inseefr/lunatic'

type LunaticGoToPage = ReturnType<typeof useLunatic>['goToPage']
type Params = {
  isFirstPage: boolean
  isLastPage: boolean
  initialCurrentPage: string | undefined
  //initialCurrentPage: PageType
  goNextLunatic: () => void
  goPrevLunatic: () => void
  openValidationModal: () => Promise<void>
  goToLunaticPage: LunaticGoToPage
}

export function useStromaeNavigation({
  isFirstPage,
  isLastPage,
  goNextLunatic,
  goPrevLunatic,
  initialCurrentPage,
  goToLunaticPage,
  openValidationModal,
}: Params) {
  //Wait for https://github.com/InseeFr/Lunatic/issues/876 to handle case lunaticPage
  const [currentPage, setCurrentPage] = useState<PageType>(
    initialCurrentPage === 'endPage' ? 'endPage' : 'welcomePage'
  )

  const goNext = () => {
    switch (currentPage) {
      case 'validationPage':
        openValidationModal().then(() => {
          setCurrentPage('endPage')
        })
        return
      case 'welcomePage':
        return setCurrentPage('lunaticPage')
      case 'lunaticPage':
        return isLastPage ? setCurrentPage('validationPage') : goNextLunatic()
      case 'endPage':
        return setCurrentPage('downloadPage')
      case 'downloadPage':
        return
    }
    assert<Equals<typeof currentPage, never>>(false)
  }
  const goPrevious = () => {
    switch (currentPage) {
      case 'validationPage':
        return setCurrentPage('lunaticPage')
      case 'lunaticPage':
        return isFirstPage ? setCurrentPage('welcomePage') : goPrevLunatic()
      case 'downloadPage':
      case 'endPage':
      case 'welcomePage':
        return
    }
    assert<Equals<typeof currentPage, never>>(false)
  }

  const goToPage = (
    params:
      | {
          page: 'welcomePage' | 'validationPage' | 'endPage' | 'downloadPage'
        }
      | Parameters<LunaticGoToPage>[0]
  ) => {
    switch (params.page) {
      case 'validationPage':
      case 'downloadPage':
      case 'endPage':
      case 'welcomePage':
        setCurrentPage(params.page)
        return
      case 'lunaticPage':
        //This should not happened
        setCurrentPage('lunaticPage')
        return
      default:
        // Lunatic page
        setCurrentPage('lunaticPage')
        goToLunaticPage(params)
    }
  }
  return { goNext, goPrevious, goToPage, currentPage: currentPage }
}
