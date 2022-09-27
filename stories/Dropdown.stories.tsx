import React from 'react'
import { Meta, Story } from '@storybook/react'
import { RuiDropdown } from '../src/Dropdown/'
import { RuiDropdownProps } from '../src/Dropdown/Dropdown'

const meta: Meta = {
    title: '@RuskelUI/Components/Dropdown',
    component: RuiDropdown
}

export default meta

const iconUser = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
const iconChev = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

const Template: Story<RuiDropdownProps> = (args) => <RuiDropdown.Wrapper {...args}>
    <RuiDropdown.Button menu='main'>Profile</RuiDropdown.Button>
    <RuiDropdown.Menu menu='main'>
        <RuiDropdown.Item leftIcon={iconUser} rightIcon={iconChev} menu='settings' isSub>
            Account Settings
           <RuiDropdown.Menu menu='settings' isSub>
                <RuiDropdown.Item color='ruby'>User Settings</RuiDropdown.Item>
                <RuiDropdown.Item color='ruby'>Dashboard Settings</RuiDropdown.Item>
                <RuiDropdown.Item color='ruby'>Team Settings</RuiDropdown.Item>
                <RuiDropdown.Item color='scarlet'>Deactivate</RuiDropdown.Item>
            </RuiDropdown.Menu>
        </RuiDropdown.Item>
        <RuiDropdown.Item>Support</RuiDropdown.Item>
        <RuiDropdown.Item>License</RuiDropdown.Item>
        <RuiDropdown.Item rightIcon={iconChev} color='amethyst'>
            Documentation
            <RuiDropdown.Menu leftIcon={iconUser} menu='documentation' isSub>
                <RuiDropdown.Item color='amethyst'>Litepaper</RuiDropdown.Item>
                <RuiDropdown.Item color='amethyst'>PoC</RuiDropdown.Item>
                <RuiDropdown.Item color='amethyst'>Technical</RuiDropdown.Item>
            </RuiDropdown.Menu>
        </RuiDropdown.Item>
    </RuiDropdown.Menu>
</RuiDropdown.Wrapper>

export const Default = Template.bind({})