import {Meta, Story} from '@storybook/react'
import React from 'react';
import {RuiAvatar, Props} from '../src/Avatar'

const meta: Meta = {
    title: '@RuskelUI/Components/Avatar',
    component: RuiAvatar
}
     
export default meta;

const Template: Story<Props> = args => <RuiAvatar {...args} />

export const Default = Template.bind({})
