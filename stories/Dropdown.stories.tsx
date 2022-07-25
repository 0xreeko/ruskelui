import React from 'react'
import {Meta, Story} from '@storybook/react'
import {RuiDropdown, Props} from '../src/Dropdown'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Dropdown',
    component: RuiDropdown
}

export default meta

const Template: Story<Props> = args => <RuiDropdown {...args} />

export const Default = Template.bind({})