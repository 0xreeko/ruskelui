import { Meta, Story } from '@storybook/react'
import React from 'react';
import {RuiToggle} from '../src/Toggle/'
import {RuiToggleProps} from '../src/Toggle/Toggle'

const meta: Meta = {
    title: '@RuskelUI/Components/Toggle',
    component: RuiToggle
}

export default meta;

const Template: Story<RuiToggleProps> = (args) => <RuiToggle disabled {...args} />

export const Default = Template.bind({})