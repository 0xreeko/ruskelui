import React from 'react'
import {Meta, Story} from '@storybook/react'
import {RuiProgress, Props} from '../src/Progress'

const meta: Meta = {
    title: "@RuskelUI/Components/Progress",
    component: RuiProgress
}

export default meta

const TemplateBar: Story<Props> = (args) => <RuiProgress.Bar {...args} />
const TemplateDonut: Story<Props> = (args) => <RuiProgress.Donut {...args} />

export const Bar = TemplateBar.bind({})
export const Donut = TemplateDonut.bind({})


Bar.args =  {
    color: "ruby",
    percentage: 54
}
Donut.args =  {
    color: "azure",
    percentage: 83
}