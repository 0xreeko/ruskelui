import React from "react";
import {Meta, Story} from '@storybook/react'
import {RuiTooltip, Props} from '../src/Tooltip'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Tooltip',
    component: RuiTooltip,
    argTypes: {
        children: {
            defaultValue: 'Default button'
        },
        message: {
            defaultValue: "This is an example"
        }
    }
}

export default meta

const Template: Story<Props> = args => <RuiTooltip {...args} />

export const Default = Template.bind({})
