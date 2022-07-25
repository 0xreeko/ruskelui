import { Meta, Story } from '@storybook/react'
import React from 'react';
import {RuiToggle, Props} from '../src/Toggle'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Toggle',
    component: RuiToggle
}

export default meta;

const Template: Story<Props> = (args) => <RuiToggle {...args} />

export const Default = Template.bind({})