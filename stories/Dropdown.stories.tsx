import React from 'react'
import { Meta, Story } from '@storybook/react'
import { RuiDropdown, Props } from '../src/Dropdown'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Dropdown',
    component: RuiDropdown
}

export default meta

const Template: Story<Props> = (args) => <RuiDropdown {...args}>
    <RuiDropdown.Menu>
        <RuiDropdown.Item>Account Settings</RuiDropdown.Item>
        <RuiDropdown.Item>Support</RuiDropdown.Item>
        <RuiDropdown.Item>License</RuiDropdown.Item>
        <RuiDropdown.Item>Documentation</RuiDropdown.Item>
    </RuiDropdown.Menu>
</RuiDropdown>

export const Default = Template.bind({})