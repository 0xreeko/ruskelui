import React from 'react';
import {Meta, Story} from '@storybook/react'
import { RuiPill, Props} from '../src/Pill'

const meta: Meta = {
    title: '@RuskelUI/Components/Pill',
    component: RuiPill,
    argTypes: {
        children: {
            defaultValue: 'Processing'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <RuiPill {...args}/>

export const Default = Template.bind({})


Default.args = {
    svg: <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
}