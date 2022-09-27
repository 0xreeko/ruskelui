import React from 'react';
import {Meta, Story} from '@storybook/react'
import { RuiPagination } from '../src/Pagination/'
import { RuiPaginationProps } from '../src/Pagination/Pagination';

const meta: Meta = {
    title: '@RuskelUI/Components/Pagination',
    component: RuiPagination,
}

export default meta;

const Template: Story<RuiPaginationProps> = (args) => <RuiPagination {...args} />

export const Default = Template.bind({})
