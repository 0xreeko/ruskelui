import React from 'react'
import {Meta,Story} from '@storybook/react'
import {KBD, Props} from '../src/KBD'

const meta: Meta = {
    title: '@RuskelUI/Primitives/KBD',
    component: KBD
}

export default meta

const Template: Story<Props> = args => <KBD {...args} />

export const Default = Template.bind({})

Default.args = {
    child: 'enter'
}