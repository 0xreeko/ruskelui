import { Meta, Story } from '@storybook/react';
import React from 'react'
import { RuiToast } from '../src/Toast/'
import { ToastProvider } from '../src/Toast/ToastProvider'
import { RuiToastProps } from '../src/Toast/Toast'

const meta: Meta = {
    title: '@RuskelUI/Components/Toast',
    component: RuiToast,
}

export default meta;

const Template: Story<RuiToastProps> = (args) => <ToastProvider>
    <RuiToast id="asd" content={{ timer: 6000, position: 'topLeft', message: "hello from storybook!", variant: 'sucess', theme: 'light' }} {...args} />
    <RuiToast id="asda" content={{ timer: 10000, position: 'topLeft', message: "hello from storybook!", variant: 'info', theme: 'dark' }}  {...args} />
    <RuiToast id="dfg" content={{  timer: 3000, position: 'topLeft', message: "hello from storybook!", variant: 'warn', theme: 'light' }} {...args} />
    <RuiToast id="sthg" content={{ timer: 5000, position: 'topLeft', message: "hello from storybook!", variant: 'error', theme: 'dark' }} {...args} />
    <RuiToast id="sthg" content={{ timer: 15000, position: 'topLeft', message: "hello from storybook!", variant: 'colored', theme: 'dark' }} {...args} />
</ToastProvider>

export const Default = Template.bind({})

export const Success = Template.bind({})

export const Err = Template.bind({})

export const Warning = Template.bind({})

export const Info = Template.bind({})

Default.args = {
    color: 'peridot',
    variant: 'colored'
}

Success.args = {
    color: 'peridot',
    variant: 'success'
}

Err.args = {
    color: 'scarlet',
    variant: 'error'
}

Warning.args = {
    color: 'orange',
    variant: 'warn'
}

Info.args = {
    color: 'blue',
    variant: 'info'
}