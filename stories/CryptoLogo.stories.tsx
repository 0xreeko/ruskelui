import React from 'react'
import {Meta, Story} from '@storybook/react'
import {RuiCryptoLogo, Props} from '../src/CryptoLogo'

const meta: Meta = {
    title: "@RuskelUI/Components/CryptoLogo",
    component: RuiCryptoLogo
}

export default meta

const Template: Story<Props> = args => <RuiCryptoLogo {...args} />

export const Default = Template.bind({}) 