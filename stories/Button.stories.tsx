import React from 'react';
import { Meta, Story } from '@storybook/react'
import { RuiButton } from '../src/Button/index'
import { RuiButtonProps } from '../src/Button/Button';

const meta: Meta = {
    title: '@RuskelUI/Components/Button',
    component: RuiButton,
    argTypes: {
        children: {
            defaultValue: 'Press Me'
        },
        size: {
            defaultValue: 'sm'
        },
        onClick: {
            handleClick: {
                action: 'clicked'
            }
        },
        loadingLabel: {
            defaultValue: "Loading..."
        }
    }
}

export default meta;

const Template: Story<RuiButtonProps> = (args) => <RuiButton varint={'filled'} {...args} disabled></RuiButton>
const ButtonGhost: Story<RuiButtonProps> = (args) => <RuiButton variant="ghost" leftIcon={icon} {...args} disabled></RuiButton>
const ButtonText: Story<RuiButtonProps> = (args) => <RuiButton variant='text' {...args} disabled></RuiButton>
const ButtonIcon: Story<RuiButtonProps> = (args) => <RuiButton variant='social' leftIcon={icon} {...args} disabled>
    Follow me on Storybook
</RuiButton>

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 4l.5 16.5l13.5 .5v-18z"></path>
    <path d="M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 2.999 .762 3.3 1.985"></path>
    <path d="M16 3.5v1"></path>
</svg>

export const Default = Template.bind({})
export const Ghost = ButtonGhost.bind({})
export const Text = ButtonText.bind({})
export const Icon = ButtonIcon.bind({})

Default.args = {
    color: 'sunstone',
    variant: 'filled'
}

Ghost.args = {
    color: 'sunstone',
    variant: 'ghost'
}

Text.args = {
    color: 'rosian',
    variant: 'text'
}

Icon.args = {
    children: icon,
    variant: 'social'
}