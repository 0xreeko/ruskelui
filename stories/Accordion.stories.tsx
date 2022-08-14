import {Meta, Story} from '@storybook/react'
import React from 'react';
import {RuiAccordion, Props} from '../src/Accordion'

const meta: Meta = {
    title: "@RuskelUI/Components/Accordion",
    component: RuiAccordion
}

export default meta

const Template: Story<Props> = args => <RuiAccordion {...args} />

export const Default = Template.bind({})