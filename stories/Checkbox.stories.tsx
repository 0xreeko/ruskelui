import React from 'react';
import {Meta, Story} from '@storybook/react'
import { RuiCheckbox } from '../src/Checkbox/'
import { RuiCheckboxProps } from '../src/Checkbox/Checkbox';

const meta: Meta = {
    title: '@RuskelUI/Components/Checkbox',
    component: RuiCheckbox,
    argTypes: {
        children: {
            defaultValue: 'Avalanche'
        }
    }
}

export default meta;

const Template: Story<RuiCheckboxProps> = (args) => <RuiCheckbox {...args}/>

export const Default = Template.bind({})