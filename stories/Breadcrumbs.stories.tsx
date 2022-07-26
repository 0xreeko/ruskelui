import {Meta, Story} from '@storybook/react'
import React from 'react';
import {RuiBreadcrumbs} from '../src/Breadcrumbs'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Breadcrumbs',
    component: RuiBreadcrumbs
}

export default meta

const Template: Story = args => <RuiBreadcrumbs {...args} />

export const Default = Template.bind({})