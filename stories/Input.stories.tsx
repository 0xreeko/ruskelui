import React from 'react';
import { Meta, Story } from "@storybook/react";
import { RuiInput } from '../src/Input/'
import { RuiInputProps } from '../src/Input/Input';
    

const meta: Meta = {
    title: '@RuskelUI/Components/Input',
    component: RuiInput,
    argTypes: {
        name: {
            defaultValue: 'username'
        }
    }
}

export default meta 

const icono = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<circle cx="10" cy="10" r="7"></circle>
<line x1="21" y1="21" x2="15" y2="15"></line>
</svg>

const iconoRight = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<line x1="18" y1="6" x2="6" y2="18"></line>
<line x1="6" y1="6" x2="18" y2="18"></line>
</svg>

const Template: Story<RuiInputProps> = (args) => <RuiInput icon={icono} iconPosition={'right'} variant='text'  {...args}/>
const _Password: Story<RuiInputProps> = (args) => <RuiInput variant='password' {...args}/>
const _Number: Story<RuiInputProps> = (args) => <RuiInput variant='number' min={0} max={100} {...args} />
const _Time: Story<RuiInputProps> = (args) => <RuiInput variant='time'  {...args}/>
const _Email: Story<RuiInputProps> = (args) => <RuiInput variant='email' {...args}/>

export const Default = Template.bind({})
export const Password = _Password.bind({})
export const Email = _Email.bind({})
export const Number = _Number.bind({})
export const Time = _Time.bind({})