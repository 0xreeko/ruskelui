import { Meta, Story } from '@storybook/react';
import React from 'react'
import {RuiToast, Props} from '../src/Toast'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Toast',
    component: RuiToast,
}

export default meta;

const Template: Story<Props> = (args) => <RuiToast {...args}/>

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