import React from 'react';
import {Meta, Story} from '@storybook/react'
import {RuiPagination, Props} from '../src/Pagination'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Pagination',
    component: RuiPagination,
}

export default meta;

const Template: Story<Props> = (args) => <RuiPagination {...args} />

export const Default = Template.bind({})
