import { Meta, Story } from '@storybook/react';
import React from 'react'
import { RuiToastProvider, useRuiToastify } from '../src/Toast/ToastProvider'
import { RuiToastProps } from '../src/Toast/Toast'

const meta: Meta = {
    title: '@RuskelUI/Components/Toast',
}

export default meta;

const Template: Story<RuiToastProps> = (args) => {
    const icon = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
    <line x1={10} y1={14} x2={20} y2={4}></line>
    <polyline points="15 4 20 4 20 9"></polyline>
 </svg>
    return (
        <RuiToastProvider>
            <div className="flex flex-col">
                <div className="max-w-2xl">
                    Usage: Import the Provider and Hook by
                    using the following import snippet:
                    <br/>
                    <code className='font-bold text-amethyst-500'>{"import { RuiToastProvider, useRuiToastify } from 'ruskelui"}</code>
                    <br/>
                    then wrapping your entrypoint {"(ex. `_app.tsx` in Next.js)"} with
                    <br/>
                    <code className='font-bold text-amethyst-500'>{"<RuiToastProvider>...</RuiToastProvider>"}</code>
                    <br />
                    and destructuring the values from the Hook with
                    <br />
                    <code className='font-bold text-amethyst-500'>{"const { addToast, removeToast } = useRuiToastify()"}</code>
                    <br />
                    and start using them all around your app where desired!
                </div>
                <div className="flex items-center gap-1 mt-3">
                    ~ 
                    <a href="https://twitter.com/0xreeko" className='flex items-center gap-2 font-bold text-blue-500'>
                    <span>0xreeko</span>
                    <span>{icon}</span>
                </a>
                </div>
            </div>
        </RuiToastProvider>
    )
}

export const Default = Template.bind({})