import React from 'react'
import {Meta, Story} from '@storybook/react'
import {RuiProgress, Props} from '../src/Progress'

const meta: Meta = {
    title: "@RuskelUI/Components/Progress",
    component: RuiProgress
}

export default meta

const Template: Story<Props> = (args) => <RuiProgress {...args} />
const TemplateOne: Story<Props> = (args) => <RuiProgress.Bar {...args} />
const TemplateTwo: Story<Props> = (args) => <RuiProgress.Donut {...args} />

export const Default = Template.bind({})
export const Bar = TemplateOne.bind({})
export const Donut = TemplateTwo.bind({})


Bar.args =  {
    color: "ruby",
    percentage: 54
}
Donut.args =  {
    color: "azure",
    percentage: 83
}