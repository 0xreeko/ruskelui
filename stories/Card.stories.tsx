import React from 'react';
import {Meta, Story} from '@storybook/react'
import { RuiCard, Props} from '../src/Card'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Card',
    component: RuiCard,

}

export default meta;

const Template: Story<Props> = (args) => <RuiCard {...args}/>

export const Default = Template.bind({})