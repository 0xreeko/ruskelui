import React from 'react'
import {Meta, Story} from "@storybook/react"
import {RuiModal, Props} from '../src/Modal'

const meta: Meta = {
    title: "@RuskelUI/Components/Modal",
    component: RuiModal
}

export default meta;

const Template: Story<Props> = args => <RuiModal {...args} />

export const Default = Template.bind({})