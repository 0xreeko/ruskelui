import { Meta, Story } from '@storybook/react'
import React from 'react';
import { RuiBreadcrumbs } from '../src/Breadcrumbs'
import { RuiBreadcrumbsProps } from '../src/types/Breadcrumbs';

const meta: Meta = {
    title: '@RuskelUI/Components/Breadcrumbs',
    component: RuiBreadcrumbs
}

export default meta

const Template: Story<RuiBreadcrumbsProps> = args => <RuiBreadcrumbs {...args}>
    <RuiBreadcrumbs.Item route='/'>Home</RuiBreadcrumbs.Item>
    <RuiBreadcrumbs.Item route='/blog' variant='current'>Blog</RuiBreadcrumbs.Item>
</RuiBreadcrumbs>

export const Default = Template.bind({})