import React from 'react';
import {Meta, Story} from '@storybook/react'
import {RuiButton, Props} from '../src/Button'

const meta: Meta = {
    title: '@RuskelUI/Components/Button',
    component: RuiButton,
    argTypes: {
        children: {
            defaultValue: 'Default button'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <RuiButton {...args} ></RuiButton>

export const Base = Template.bind({})
export const Small = Template.bind({})
export const Large = Template.bind({})
export const XLarge = Template.bind({})

Small.args = {
    color: 'sunstone',
    children: "I am small",
    size: "small"
}

Small.args = {
    color: 'sunstone',
    children: "I am small",
    size: "small"
}

Large.args = {
    color: 'ruby',
    children: "I am small",
    size: "large"
}

XLarge.args = {
    color: 'pink',
    children: "I am small",
    size: "xlarge"
}