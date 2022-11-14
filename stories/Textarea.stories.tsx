import React from 'react';
import { Meta, Story } from '@storybook/react'
import {RuiTextarea} from '../src/Textarea'

const meta: Meta = {
    title: '@RuskelUI/Components/Textarea',
    component: RuiTextarea
}

export default meta

const Template: Story = (args) => <RuiTextarea />

export const Default = Template.bind({}) 