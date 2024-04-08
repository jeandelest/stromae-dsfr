import { useState } from 'react'
import { assert, type Equals } from 'tsafe/assert'
import type { InternalPageType, PageType, StromaePage } from 'model/Page'
import type {
  LunaticGoNextPage,
  LunaticGoPreviousPage,
  LunaticGoToPage,
} from './utils/lunaticType'

type Params = {
  isFirstPage: boolean
  isLastPage: boolean
  initialCurrentPage: PageType | undefined
  goNextLunatic: LunaticGoNextPage
  goPrevLunatic: LunaticGoPreviousPage
  openValidationModal: () => Promise<void>
  goToLunaticPage: LunaticGoToPage
}

export function useStromaeNavigation({
  isFirstPage,
  isLastPage,
  initialCurrentPage = 'welcomePage',
  goNextLunatic,
  goPrevLunatic,
  goToLunaticPage,
  openValidationModal,
}: Params) {
  const [currentPage, setCurrentPage] = useState<InternalPageType>(() =>
    ['endPage', 'downloadPage'].includes(initialCurrentPage) //downloadPage should not be saved into state but to be sure i handle case
      ? 'endPage'
      : 'welcomePage'
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
          page: StromaePage
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
      default:
        // Lunatic page
        setCurrentPage('lunaticPage')
        goToLunaticPage(params)
    }
  }
  return { goNext, goPrevious, goToPage, currentPage }
}
