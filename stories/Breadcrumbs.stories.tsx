import {Meta, Story} from '@storybook/react'
import React from 'react';
import {RuiBreadcrumbs, Crumb} from '../src/Breadcrumbs'

const meta: Meta = {
    title: '@RuskelUI/Components/Breadcrumbs',
    component: RuiBreadcrumbs
}

export default meta

const Template: Story<Crumb> = args => <RuiBreadcrumbs {...args} />

export const Default = Template.bind({})