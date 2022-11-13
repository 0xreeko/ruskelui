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
    <RuiSelect.Item color='jade' value='Holo'/>
    <RuiSelect.Item color='lazure' value='Fantom' disabled/>
    <RuiSelect.Item color='rosian' value='Kadena'/>
    <RuiSelect.Item color='scarlet' value='Tron'/>
    <RuiSelect.Item color='sunstone' value='Bitcoin'/>
    <RuiSelect.Item color='lazure' value='USDC'/>
</RuiSelect>

export const Default = Template.bind({})

Default.args = {
    label: "Select target blockchain"
}