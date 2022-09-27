import React from 'react'
import {Meta, Story} from "@storybook/react"
import { RuiModal } from '../src/Modal/'
import { RuiModalProps } from '../src/Modal/Modal'

const meta: Meta = {
    title: "@RuskelUI/Components/Modal",
    component: RuiModal
}

export default meta;

const Template: Story<RuiModalProps> = args => <RuiModal {...args} />

export const Default = Template.bind({})