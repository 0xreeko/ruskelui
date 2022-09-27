import {Meta, Story} from '@storybook/react'
import React from 'react';
import {RuiAvatar} from '../src/Avatar/index'
import { RuiAvatarProps } from '../src/Avatar/Avatar';

const meta: Meta = {
    title: '@RuskelUI/Components/Avatar',
    component: RuiAvatar
}
     
export default meta;

const Template: Story<RuiAvatarProps> = args => <RuiAvatar src='https://img.seadn.io/files/1120d382b4169cb55898b77930e445c1.png?fit=max&w=600'  {...args} />

export const Default = Template.bind({})
