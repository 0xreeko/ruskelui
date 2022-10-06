import React from "react"
import { RuiTooltipProps } from "./Tooltip"

export const RuiTooltip = ({ name, message, children, direction }: RuiTooltipProps) => {
    switch (direction) {
        case 'left':
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    {children}
                    <div className="absolute z-10 px-3 py-1 duration-300 origin-right -translate-x-full -translate-y-1/2 rounded-lg h-fit top-1/2 -left-3 bg-russian-600 group-hover:opacity-100 text-sylver-100">
                        <span className="text-d-copy">{message}</span>
                    </div>
                </div>
            );
        case 'topLeft':
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    <p>{children}</p>
                    <div className="absolute z-10 px-3 py-1 duration-300 origin-bottom-right -translate-x-full -translate-y-full rounded-lg h-fit bg-russian-600 -top-2 -left-3 group-hover:opacity-100 text-sylver-100">
                        <span className="text-d-copy">{message}</span>
                    </div>
                </div>
            )
        case 'top':
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    {children}
                    <div className="absolute z-10 px-2 py-1 duration-300 origin-bottom -translate-x-1/2 -translate-y-full rounded-lg opacity-0 h-fit bg-russian-600 -top-2 left-1/2 group-hover:opacity-100 text-sylver-100">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        case 'topRight':
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    <p>{children}</p>
                    <div className="absolute z-10 px-3 py-1 duration-300 origin-bottom-left translate-x-full -translate-y-full rounded-lg opacity-0 h-fit bg-russian-600 -top-2 -right-3 group-hover:opacity-100 text-sylver-100">
                        <span className="text-d-copy">{message}</span>
                    </div>
                </div>
            )
        case 'right':
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    {children}
                    <div className="absolute z-10 px-3 py-1 duration-300 origin-left translate-x-full -translate-y-1/2 rounded-lg opacity-0 h-fit bg-russian-600 top-1/2 -right-3 group-hover:opacity-100 text-sylver-100">
                        <span className="text-d-copy">{message}</span>
                    </div>
                </div>
            )
        case 'bottomRight':
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    {children}
                    <div className="absolute z-10 px-2 py-1 duration-300 origin-top-left translate-x-full translate-y-1/2 rounded-lg opacity-0 h-fit bg-russian-600 top-1/2 -right-3 group-hover:opacity-100 text-sylver-100">
                        <span className="text-d-copy">{message}</span>
                    </div>
                </div>
            )
        case 'bottom':
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    {children}
                    <div className="absolute z-10 px-2 py-1 duration-300 origin-bottom -translate-x-1/2 translate-y-full rounded-lg opacity-0 h-fit bg-russian-600 -bottom-2 left-1/2 group-hover:opacity-100 text-sylver-100">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        case 'bottomLeft':
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    {children}
                    <div className="absolute z-10 px-3 py-1 duration-300 origin-top-right -translate-x-full translate-y-1/2 rounded-lg opacity-0 h-fit top-1/2 -left-3 bg-russian-600 group-hover:opacity-100 text-sylver-100">
                        <span className="text-d-copy">{message}</span>
                    </div>
                </div>
            )
        default:
            return (
                <div role={'tooltip'} id={name} className="relative inline-block group">
                    {children}
                    <div className="absolute z-10 px-2 py-1 duration-300 origin-bottom -translate-x-1/2 -translate-y-full rounded-lg opacity-0 h-fit bg-russian-600 -top-2 left-1/2 group-hover:opacity-100 text-sylver-100">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
    }
}