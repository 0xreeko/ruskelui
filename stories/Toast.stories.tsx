import { Meta, Story } from '@storybook/react';
import React from 'react'
import {RuiToastProvider, useRuiToasts} from '../src/Toast/'
import {RuiToastProps} from '../src/Toast/Toast'

const meta: Meta = {
    title: '@RuskelUI/Components/Toast',
    component: RuiToastProvider,
}

export default meta;

const Template: Story<RuiToastProps> = (args) => <div className="fixed right-2.5 top-2.5 max-w-xs">
    Cannot test 
</div>

export const Default = Template.bind({})

export const Success = Template.bind({})

export const Err = Template.bind({})

export const Warning = Template.bind({})

export const Info = Template.bind({})

Success.args = {
    color: 'peridot',
    title: "Success!"
}

Err.args = {
    color: 'scarlet',
    title: 'Error!'
}

Warning.args = {
    color: 'orange',
    title: "Warning!"
}

Info.args = {
    color: 'blue',
    title: "Information!"
}