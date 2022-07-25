import React from 'react';
import {Meta, Story} from '@storybook/react'
import { RuiCheckbox, Props} from '../src/Checkbox'

const meta: Meta = {
    title: '@RuskelUI/Primitives/Checkbox',
    component: RuiCheckbox,
    argTypes: {
        children: {
            defaultValue: 'Avalanche'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <RuiCheckbox {...args}/>

export const Default = Template.bind({})