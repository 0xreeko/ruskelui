import { Meta, Story } from '@storybook/react';
import React from 'react'
import {RuiToast} from '../src/Toast/'
import {RuiToastProps} from '../src/Toast/Toast'

const meta: Meta = {
    title: '@RuskelUI/Components/Toast',
    component: RuiToast,
}

export default meta;

const Template: Story<RuiToastProps> = (args) => <div className="fixed right-2.5 top-2.5 max-w-xs">
    <RuiToast theme='light' {...args} />
    <RuiToast theme='dark'{...args}/>   
</div>

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