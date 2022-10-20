import React from 'react'
import { RuiPillProps, colorVar } from './Pill'

export const RuiPill = ({id, children, color = "ruby", svg}: RuiPillProps) => {

    return (
        <div id={id} className={`${colorVar[color]} flex items-center duration-300 select-none w-fit px-2 py-1 mobile-overline rounded-[6px]`}>
            <slot name='svg'>{svg}</slot>
            <span>{children}</span>
        </div>
    )
}