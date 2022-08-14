import React from 'react'
import {Meta,Story} from '@storybook/react'
import {RuiKBD, Props} from '../src/KBD'

const meta: Meta = {
    title: '@RuskelUI/Components/KBD',
    component: RuiKBD
}

export default meta

const Template: Story<Props> = args => <RuiKBD {...args} />

export const Default = Template.bind({})

Default.args = {
    children: 'enter'
}