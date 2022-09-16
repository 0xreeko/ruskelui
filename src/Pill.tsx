import React, { HTMLAttributes, ReactNode } from 'react'
import { RuiPillProps, colorVar } from './types/Pill'

export const RuiPill = ({children, color = "ruby", svg}: RuiPillProps) => {

    return (
        <div className={`${colorVar[color]} flex items-center duration-300 select-none w-fit px-2 py-1 mobile-overline rounded-[6px]`}>
            <slot name='svg'>{svg}</slot>
            <span>{children}</span>
        </div>
    )
}