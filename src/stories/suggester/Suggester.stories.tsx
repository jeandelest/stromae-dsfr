import type { Meta, StoryObj } from '@storybook/react'

import { Orchestrator } from '../Orchestrator'
import { source as arbitrarySource } from './arbitrary'
import { source as multilineSource } from './multiline'
import { source as questionSource } from './question'
import { source } from './source'

const meta = {
  title: 'Components/Suggester',
  component: Orchestrator,
  args: {
    autoSuggesterLoading: true,
  },
  parameters: {
    docs: {
      description: {
        component:
          'The Suggester component is useful when users have many choices to select from. It helps them find options easily by suggesting matches as they type.',
      },
    },
  },
  argTypes: {
    autoSuggesterLoading: {
      table: { disable: false },
    },
  },
} satisfies Meta<typeof Orchestrator>

export default meta

type Story = StoryObj<typeof Orchestrator>

export const Default = {
  args: { source },
} satisfies Story

export const Arbitrary = {
  args: { source: arbitrarySource },
} satisfies Story

export const Multiline = {
  args: { source: multilineSource },
} satisfies Story
export const Question = {
  args: { source: questionSource },
} satisfies Story
