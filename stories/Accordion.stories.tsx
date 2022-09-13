import { Meta, Story } from '@storybook/react'
import React from 'react';
import { RuiAccordion, Props } from '../src/Accordion'

const meta: Meta = {
    title: "@RuskelUI/Components/Accordion",
    component: RuiAccordion
}

export default meta


const _data = [
    { label: "What is RuskelUI?", content: "v" },
    { label: "What is Web3Source that opens the portal?", content: "v" },
    { label: "What is Thirdflow?", content: "v" },
]
 
const Template: Story<Props> = args => <RuiAccordion data={_data} {...args} />

export const Default = Template.bind({})