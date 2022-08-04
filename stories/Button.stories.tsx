import React from 'react';
import {Meta, Story} from '@storybook/react'
import {RuiButton, Props} from '../src/Button'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Button',
    component: RuiButton,
    argTypes: {
        children: {
            defaultValue: 'Default button'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <RuiButton {...args} ></RuiButton>

export const Default = Template.bind({})

export const Secondary = Template.bind({})

Secondary.args = {
    color: 'sunstone',
    children: "I am secondary example"
}
