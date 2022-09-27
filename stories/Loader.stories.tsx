import React from 'react'
import { Meta, Story } from '@storybook/react'
import { RuiLoader } from '../src/Loader'
import { RuiLoaderProps } from '../src/Loader/Loader'

const meta: Meta = {
    title: '@RuskelUI/Components/Loader',
    component: RuiLoader
}

export default meta

const Template: Story<RuiLoaderProps> = (args) => <RuiLoader {...args}/>

export const Default = Template.bind({})