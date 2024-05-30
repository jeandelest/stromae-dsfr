import type { InternalPageType } from 'model/Page'
import type { LunaticOverview, LunaticPageTag } from './lunaticType'

const pageTagComparator = (a: LunaticPageTag, b: LunaticPageTag) => {
  const pageA = a.split(/\D/).map((v) => parseInt(v, 10))
  const pageB = b.split(/\D/).map((v) => parseInt(v, 10))
  // [0, 2, 1] is used to extract the significant part of the pageTag part (start with page, then iteration, then subpage)
  for (const index of [0, 2, 1]) {
    if (pageA[index] !== pageB[index]) {
      return (pageA[index] ?? -1) - (pageB[index] ?? -1)
    }
  }
  return 0
}

const getCurrentAndNextSequenceLabel = ({
  overview,
  currentPageTag,
}: {
  overview: LunaticOverview
  currentPageTag: LunaticPageTag
}) => {
  const sequences = overview.filter(
    (sequence) => pageTagComparator(currentPageTag, sequence.page) <= 0
  )
  console.log(currentPageTag)
  console.log({ overview })
  console.log({ sequences })
  //overview is ordered so sequences too
  const currentSequence = sequences[0]
  const nextSequence = sequences[1]

  return {
    currentLabel: currentSequence.label,
    nextLabel: nextSequence?.label,
    currentStep:
      overview.findIndex((sequence) => sequence.id === currentSequence.id) + 1,
  }
}

export const getSteeperInfo = (params: {
  overview: LunaticOverview
  currentPageTag: LunaticPageTag
  currentPage: InternalPageType
}) => {
  const { overview } = params

  if (overview.length === 0) return { displayOverview: false }

  const { currentLabel, nextLabel, currentStep } =
    getCurrentAndNextSequenceLabel(params)
  return {
    displayOverview: true,
    currentSequenceLabel: currentLabel,
    nextSequenceLabel: nextLabel,
    sequenceCount: overview.length,
    currentStep,
  }
}
