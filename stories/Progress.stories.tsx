import React from 'react'
import {Meta, Story} from '@storybook/react'
import { RuiProgress } from '../src/Progress/'
import { RuiProgressProps } from '../src/Progress/Progress'

const meta: Meta = {
    title: "@RuskelUI/Components/Progress",
    component: RuiProgress,
    argTypes: {
        color: {
            defaultValue: 'amethyst'
        },
        percentage: {
            defaultValue: 23
        }
    }
}

export default meta

const TemplateBar: Story<RuiProgressProps> = (args) => <RuiProgress variant='bar' {...args}  />
const TemplateDonut: Story<RuiProgressProps> = (args) => <RuiProgress variant='donut' {...args} />

export const Bar = TemplateBar.bind({})
export const Donut = TemplateDonut.bind({})


Bar.args =  {
    color: "rosian",
    percentage: 54
}
Donut.args =  {
    color: "lazure",
    percentage: 83
}