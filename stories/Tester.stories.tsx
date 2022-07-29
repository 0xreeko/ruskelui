import React from 'react'
import {Meta, Story} from '@storybook/react'

const meta: Meta = {
    title: "Tester",
}

export default meta

const Template: Story = args => <div {...args}>
    <h1>Tester</h1>
</div>

export const Default = Template.bind({})