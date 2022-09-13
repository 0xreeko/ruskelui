import React from 'react';
import {Meta, Story} from '@storybook/react'
import {RuiButton, Props} from '../src/Button'

const meta: Meta = {
    title: '@RuskelUI/Components/Button',
    component: RuiButton,
    argTypes: {
        children: {
            defaultValue: 'Press Me'
        },
        size: {
            defaultValue: 'base'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <RuiButton {...args} ></RuiButton>
const ButtonOutline: Story<Props> = (args) => <RuiButton.Outline {...args} ></RuiButton.Outline>
const ButtonText: Story<Props> = (args) => <RuiButton.Text {...args} ></RuiButton.Text>
const ButtonGradient: Story<Props> = (args) => <RuiButton.Gradient {...args} ></RuiButton.Gradient>

export const Default = Template.bind({})
export const Outline = ButtonOutline.bind({})
export const Text = ButtonText.bind({})
export const Gradient = ButtonGradient.bind({})

Default.args = {
    color: 'sunstone',
}

Outline.args = {
    color: 'sunstone',
}

Text.args = {
    color: 'ruby',
}

Gradient.args = {
    color: 'pink',
}