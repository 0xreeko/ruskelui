import React from 'react'
import {Meta, Story} from '@storybook/react'
import {RuiProgressBar, Props} from '../src/ProgressBar'

const meta: Meta = {
    title: "@RuskelUI/Primitives/ProgressBar",
    component: RuiProgressBar
}

export default meta

const Template: Story<Props> = (args) => <RuiProgressBar {...args} />

export const Default = Template.bind({})