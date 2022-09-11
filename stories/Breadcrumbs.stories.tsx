import { Meta, Story } from '@storybook/react'
import React from 'react';
import { RuiBreadcrumbs, Props } from '../src/Breadcrumbs'

const meta: Meta = {
    title: '@RuskelUI/Components/Breadcrumbs',
    component: RuiBreadcrumbs
}

export default meta

const Template: Story<Props> = args => <RuiBreadcrumbs {...args}>
    <RuiBreadcrumbs.Item route='/'>Home</RuiBreadcrumbs.Item>
    <RuiBreadcrumbs.Item route='/blog' isInactive={true}>Blog</RuiBreadcrumbs.Item>
</RuiBreadcrumbs>

export const Default = Template.bind({})