import React from 'react'
import {Meta, Story} from '@storybook/react'
import { RuiProgress } from '../src/Progress'
import { RuiProgressProps } from '../src/types/Progress'

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

const TemplateBar: Story<RuiProgressProps> = (args) => <RuiProgress variant='Bar' {...args}  />
const TemplateDonut: Story<RuiProgressProps> = (args) => <RuiProgress variant='Donut' {...args} />

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