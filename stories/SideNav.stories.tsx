import React from 'react'
import {Meta, Story} from '@storybook/react'
import {RuiSideNav} from '../src/SideNav'


const meta: Meta = {
    title: '@RuskelUI/Primitives/SideNav',
    component: RuiSideNav
}

export default meta

const Template: Story = args => <RuiSideNav {...args} />

export const Default = Template.bind({})