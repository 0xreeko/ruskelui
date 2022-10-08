import React, { LegacyRef, useRef, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { RuiDropdown } from '../src/Dropdown/'
import { RicoDropdown } from '../src/Dropdown/dd'
import { RuiDropdownProps } from '../src/Dropdown/Dropdown'

const meta: Meta = {
    title: '@RuskelUI/Components/Dropdown',
    component: RuiDropdown
}

export default meta

const iconUser = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
const iconChev = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

const Template: Story<RuiDropdownProps> = (args) => <RuiDropdown {...args}>
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
</RuiDropdown>

const _Revamped: Story = (args) => {

    const [open, setOpen] = useState(false)
    return (
        <RicoDropdown position='start' {...args}>
            <button onClick={() => setOpen(!open)}>Click Here</button>
            {open &&
                <RicoDropdown.Portal>
                    <RicoDropdown.Menu label='main' variant='main'>
                        <RicoDropdown.Item color="amethyst">Dashboard</RicoDropdown.Item>
                        <RicoDropdown.Item leftIcon={iconUser} rightIcon={iconChev} color="amethyst" navToDrop='accountSettings'>Account Settings</RicoDropdown.Item>
                        <RicoDropdown.Item color="azure">Support</RicoDropdown.Item>
                        <RicoDropdown.Item color="scarlet">Log Out</RicoDropdown.Item>
                    </RicoDropdown.Menu>
                    <RicoDropdown.Menu label='accountSettings' variant='secondary'>
                        <RicoDropdown.Item color="amethyst" navToDrop='main'>Main Menu</RicoDropdown.Item>
                        <RicoDropdown.Item color="azure">Edit Profile</RicoDropdown.Item>
                        <RicoDropdown.Item color="teal">Edit 2FA settings</RicoDropdown.Item>
                        <RicoDropdown.Item color="amethyst">Edit Party settings</RicoDropdown.Item>
                        <RicoDropdown.Item color="scarlet">Log Out</RicoDropdown.Item>
                    </RicoDropdown.Menu>
                </RicoDropdown.Portal>}
        </RicoDropdown>
    )
}


export const Default = Template.bind({})

export const Revamped = _Revamped.bind({})