import React from 'react'
import {Meta, Story} from "@storybook/react"
import { RuiModal } from '../src/Modal/'
import { RuiModalProps } from '../src/Modal/Modal'

const meta: Meta = {
    title: "@RuskelUI/Components/Modal",
    component: RuiModal
}

export default meta;

const Template: Story<RuiModalProps> = args => <RuiModal {...args}>
    <h1>Hi this is a modal!</h1>
    <p>Giving you the room to customise the functionality around this modal, since it's extending the native Dialog element 👾</p>
</RuiModal>

export const Default = Template.bind({})