import React from 'react'
import { Meta, Story } from '@storybook/react'
import { RuiLoader, Props} from '../src/Loader'

const meta: Meta = {
    title: '@RuskelUI/Components/Loader',
    component: RuiLoader
}

export default meta

const Template: Story<Props> = (args) => <RuiLoader {...args}/>

export const Default = Template.bind({})