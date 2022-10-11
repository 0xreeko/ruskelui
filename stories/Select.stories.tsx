import React from 'react'
import {Meta, Story} from '@storybook/react'
import { RuiSelect } from '../src/Select/'
import { RuiSelectProps } from '../src/Select/Select'

const meta: Meta = {
    title: '@RuskelUI/Components/Select',
    component: RuiSelect
}

export default meta

const Template: Story<RuiSelectProps> = args => <RuiSelect {...args}>
    <RuiSelect.Item color='amethyst' value='Polygon'/>
    <RuiSelect.Item color='green' value='Holo'/>
    <RuiSelect.Item color='blue' value='Fantom' disabled/>
    <RuiSelect.Item color='pink' value='Kadena'/>
    <RuiSelect.Item color='red' value='Tron'/>
    <RuiSelect.Item color='amber' value='Bitcoin'/>
    <RuiSelect.Item color='yellow' value='USDC'/>
</RuiSelect>

export const Default = Template.bind({})

Default.args = {
    label: "Select target blockchain"
}