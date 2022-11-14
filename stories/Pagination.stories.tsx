import React from 'react'
import { Meta, Story } from "@storybook/react"
import {RuiPagination} from '../src/Pagination'
 
const meta: Meta = {
    title: "@RuskelUI/Components/Pagination",
    component: RuiPagination
}

export default meta;

const Template: Story = args => <RuiPagination />

export const Default = Template.bind({})