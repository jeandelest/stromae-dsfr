import type { Meta, StoryObj } from '@storybook/react'

import { Orchestrator } from '../Orchestrator'
import { source } from './default'
import { source as questionSource } from './question'
import { source as sourceWithUnit } from './withUnit'

const meta = {
  title: 'Components/InputNumber',
  component: Orchestrator,
  parameters: {
    docs: {
      description: {
        component:
          'This component should be used when you want the user to enter a number. You can add a min and max property if you want to restrict the number the user can enter. You can also specify the number of decimals allowed.',
      },
    },
  },
} satisfies Meta<typeof Orchestrator>

export default meta

type Story = StoryObj<typeof Orchestrator>

export const Default = {
  args: { source: source },
} satisfies Story

export const WithUnit = {
  parameters: {
    docs: {
      description: {
        story: 'You can specify a unit.',
      },
    },
  },
  args: { source: sourceWithUnit },
} satisfies Story

export const Question = {
  args: { source: questionSource },
} satisfies Story
