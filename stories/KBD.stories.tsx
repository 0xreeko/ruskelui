import React from 'react'
import {Meta,Story} from '@storybook/react'
import { RuiKBD } from '../src/KBD/'
import { RuiKBDProps } from '../src/KBD/KBD'

const meta: Meta = {
    title: '@RuskelUI/Components/KBD',
    component: RuiKBD
}

export default meta

const Template: Story<RuiKBDProps> = args => <RuiKBD {...args} />

export const Default = Template.bind({})

Default.args = {
    children: 'enter'
}