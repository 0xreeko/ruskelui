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

const icono = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<circle cx="10" cy="10" r="7"></circle>
<line x1="21" y1="21" x2="15" y2="15"></line>
</svg>

const iconoRight = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<line x1="18" y1="6" x2="6" y2="18"></line>
<line x1="6" y1="6" x2="18" y2="18"></line>
</svg>

const Template: Story<RuiInputProps> = (args) => <RuiInput variant='base' floatingLabel='Username' disabled {...args}/>
const _Password: Story<RuiInputProps> = (args) => <RuiInput variant='password' disabled autoComplete='false' {...args}/>

export const Default = Template.bind({})
export const Password = _Password.bind({})