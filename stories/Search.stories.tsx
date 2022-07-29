import React from 'react'
import {Meta, Story} from '@storybook/react'
import {RuiSearch, RootProps} from '../src/Search'

const meta: Meta = {
    title: "@RuskelUI/Primitives/Search",
    component: RuiSearch
}

export default meta

const Template: Story <RootProps> = args => <RuiSearch {...args} />

export const Default = Template.bind({})