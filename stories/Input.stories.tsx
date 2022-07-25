import React from 'react';
import { Meta, Story } from "@storybook/react";
import { RuiInput, Props} from '../src/Input'


const meta: Meta = {
    title: '@RuskelUI/Primitives/Input',
    component: RuiInput,
    argTypes: {
        name: {
            defaultValue: 'username'
        }
    }
}

export default meta 

const Template: Story<Props> = (args) => <RuiInput {...args} />

export const Default = Template.bind({})