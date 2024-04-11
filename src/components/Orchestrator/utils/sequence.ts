import type { LunaticComponentProps } from './lunaticType'

export const isSequencePage = (components: LunaticComponentProps) =>
  components.some((component) => component.componentType === 'Sequence')
