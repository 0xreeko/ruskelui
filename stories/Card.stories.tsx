import React from 'react';
import {Meta, Story} from '@storybook/react'
import { RuiCard } from '../src/Card/'
import { RuiCardProps } from '../src/Card/Card';

const meta: Meta = {
    title: '@RuskelUI/Components/Card',
    component: RuiCard,

}

export default meta;

const Template: Story<RuiCardProps> = (args) => <RuiCard {...args}/>

export const Default = Template.bind({})