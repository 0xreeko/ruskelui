import { Meta, Story } from '@storybook/react'
import React from 'react';
import { RuiAccordionProps } from '../src/Accordion/Accordion';
import {RuiAccordion} from '../src/Accordion/index';

const meta: Meta = {
    title: "@RuskelUI/Components/Accordion",
    component: RuiAccordion
}

export default meta


const _data = [
    { label: "What is RUI?", content: "v" },
    { label: "How do you use this library?", content: "v" },
    { label: "What is Web3?", content: "v" },
]
 
const Template: Story<RuiAccordionProps> = args => <RuiAccordion data={_data} {...args} />

export const Default = Template.bind({})