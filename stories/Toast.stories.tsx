import { Meta, Story } from '@storybook/react';
import React from 'react'
import {RuiToast} from '../src/Toast/'
import {RuiToastProps} from '../src/Toast/Toast'

const meta: Meta = {
    title: '@RuskelUI/Components/Toast',
    component: RuiToast,
}

export default meta;

const Template: Story<RuiToastProps> = (args) => <RuiToast {...args}/>

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