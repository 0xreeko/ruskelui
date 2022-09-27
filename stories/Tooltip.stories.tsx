import React from "react";
import {Meta, Story} from '@storybook/react'
import {RuiTooltip} from '../src/Tooltip/'
import {RuiTooltipProps} from '../src/Tooltip/Tooltip'

const meta: Meta = {
    title: '@RuskelUI/Components/Tooltip',
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

const Template: Story<RuiTooltipProps> = args => <RuiTooltip {...args} />

export const Default = Template.bind({})
