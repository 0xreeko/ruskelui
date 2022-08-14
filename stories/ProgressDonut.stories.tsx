import React from 'react';
import {Meta, Story} from '@storybook/react'
import {RuiProgressDonut, Props} from '../src/ProgressDonut'

const meta: Meta = {
    title: "@RuskelUI/Components/ProgressDonut",
    component: RuiProgressDonut
}

export default meta

const Template: Story<Props> = (args) => <RuiProgressDonut {...args} />

export const Default = Template.bind({})