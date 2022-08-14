import React from 'react'
import {Meta, Story} from '@storybook/react'
import {RuiSelect, Props} from '../src/Select'

const meta: Meta = {
    title: '@RuskelUI/Components/Select',
    component: RuiSelect
}

export default meta

const Template: Story<Props> = args => <RuiSelect {...args} />

export const Default = Template.bind({})