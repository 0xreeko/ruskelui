import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { RuiDropdown } from '../src/Dropdown/'

const meta: Meta = {
    title: '@RuskelUI/Components/Dropdown',
    component: RuiDropdown
}

export default meta

const iconUser = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
const iconChev = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

const _Revamped: Story = (args) => {

    const [open, setOpen] = useState(false)
    return (
        <RuiDropdown position='bottom' {...args}>
            <button onClick={() => setOpen(!open)}>Click Here</button>
            {open &&
                <RuiDropdown.Portal>
                    <RuiDropdown.Menu label='main' variant='main'>
                        <RuiDropdown.Item color="amethyst">Dashboard</RuiDropdown.Item>
                        <RuiDropdown.Item leftIcon={iconUser} rightIcon={iconChev} disabled color="amethyst" navToDrop='accountSettings'>Account Settings</RuiDropdown.Item>
                        <RuiDropdown.Item color="azure" disabled>Support</RuiDropdown.Item>
                        <RuiDropdown.Item color="scarlet">Log Out</RuiDropdown.Item>
                    </RuiDropdown.Menu>
                    <RuiDropdown.Menu label='accountSettings' variant='secondary'>
                        <RuiDropdown.Item color="amethyst" navToDrop='main'>Main Menu</RuiDropdown.Item>
                        <RuiDropdown.Item color="azure">Edit Profile</RuiDropdown.Item>
                        <RuiDropdown.Item color="teal">Edit 2FA settings</RuiDropdown.Item>
                        <RuiDropdown.Item color="amethyst">Edit Party settings</RuiDropdown.Item>
                        <RuiDropdown.Item color="scarlet">Log Out</RuiDropdown.Item>
                    </RuiDropdown.Menu>
                </RuiDropdown.Portal>}
        </RuiDropdown>
    )
}



export const Default = _Revamped.bind({})