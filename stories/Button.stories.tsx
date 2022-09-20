import React from 'react';
import {Meta, Story} from '@storybook/react'
import { RuiButton } from '../src/Button'
import { gradientFlow, RuiButtonProps } from '../src/types/Button';

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

const Template: Story<RuiButtonProps> = (args) => <RuiButton variant='Base' {...args} ></RuiButton>
const ButtonGhost: Story<RuiButtonProps> = (args) => <RuiButton variant='Ghost' {...args} ></RuiButton>
const ButtonGradient: Story<RuiButtonProps> = (args) => <RuiButton variant='Gradient' {...args} ></RuiButton>
const ButtonText: Story<RuiButtonProps> = (args) => <RuiButton variant='Text' {...args} ></RuiButton>
const ButtonThreeDee: Story<RuiButtonProps> = (args) => <RuiButton variant='3D' {...args} ></RuiButton>
const ButtonThreeDeeGee: Story<RuiButtonProps> = (args) => <RuiButton variant='3DGradient' {...args} ></RuiButton>

export const Default = Template.bind({})
export const Ghost = ButtonGhost.bind({})
export const Gradient = ButtonGradient.bind({})
export const Text = ButtonText.bind({})
export const ThreeDee = ButtonThreeDee.bind({})
export const ThreeDeeGee = ButtonThreeDeeGee.bind({})

Default.args = {
    color: 'sunstone',
}

Ghost.args = {
    color: 'sunstone',
}

Text.args = {
    color: 'ruby',
}

Gradient.args = {
    color: 'pink',
}

ThreeDee.args = {
    color: 'pink',
}
ThreeDeeGee.args = {
    startColor: 'pink',
    endColor: 'red',
    direction: "right"
}