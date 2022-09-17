import React from "react"
import { RuiTooltipProps } from "./types/Tooltip"

export const RuiTooltip = ({ name, message, children, direction }: RuiTooltipProps) => {
    switch (direction) {
        case 'left':
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    {children}
                    <div className="absolute z-10 max-w-xs px-3 py-1 duration-300 origin-right scale-0 -translate-x-full -translate-y-1/2 rounded-lg opacity-0 top-1/2 -left-3 bg-russian-600 group-hover:scale-100 group-hover:opacity-100 text-sylver-100">
                        <span>{message}</span>
                    </div>
                </div>
            );
        case 'topLeft':
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    <p>{children}</p>
                    <div className="absolute max-w-xs px-3 py-1 duration-300 origin-bottom-right scale-0 -translate-x-full -translate-y-full rounded-lg opacity-0 bg-russian-600 -top-2 -left-3 group-hover:scale-100 group-hover:opacity-100 text-sylver-100">
                        <span>{message}</span>
                    </div>
                </div>
            )
        case 'top':
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    {children}
                    <div className="absolute max-w-lg px-2 py-1 duration-300 origin-bottom transform scale-0 -translate-x-1/2 -translate-y-full rounded-lg opacity-0 bg-russian-600 -top-2 left-1/2 group-hover:scale-100 group-hover:opacity-100 text-sylver-100">
                        <span>{message}</span>
                    </div>
                </div>
            )
        case 'topRight':
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    <p>{children}</p>
                    <div className="absolute max-w-xs px-3 py-1 duration-300 origin-bottom-left scale-0 translate-x-full -translate-y-full rounded-lg opacity-0 bg-russian-600 -top-2 -right-3 group-hover:scale-100 group-hover:opacity-100 text-sylver-100">
                        <span>{message}</span>
                    </div>
                </div>
            )
        case 'right':
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    {children}
                    <div className="absolute max-w-xs px-3 py-1 duration-300 origin-left scale-0 translate-x-full -translate-y-1/2 rounded-lg opacity-0 bg-russian-600 top-1/2 -right-3 group-hover:scale-100 group-hover:opacity-100 text-sylver-100">
                        <span>{message}</span>
                    </div>
                </div>
            )
        case 'bottomRight':
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    {children}
                    <div className="absolute max-w-xs px-3 py-1 duration-300 origin-top-left scale-0 translate-x-full translate-y-1/2 rounded-lg opacity-0 bg-russian-600 top-1/2 -right-3 group-hover:scale-100 group-hover:opacity-100 text-sylver-100">
                        <span>{message}</span>
                    </div>
                </div>
            )
        case 'bottom':
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    {children}
                    <div className="absolute px-2 py-1 duration-300 origin-top scale-0 -translate-x-1/2 translate-y-full rounded-lg opacity-0 bg-russian-600 -bottom-2 left-1/2 group-hover:scale-100 group-hover:opacity-100 text-sylver-100">
                        <span>{message}</span>
                    </div>
                </div>
            )
        case 'bottomLeft':
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    {children}
                    <div className="absolute max-w-xs px-3 py-1 duration-300 origin-top-right scale-0 -translate-x-full translate-y-1/2 rounded-lg opacity-0 top-1/2 -left-3 bg-russian-600 group-hover:scale-100 group-hover:opacity-100">
                        <span>{message}</span>
                    </div>
                </div>
            )
        default:
            return (
                <div role={'tooltip'} id={name} title={name} className="relative inline-block group">
                    {children}
                    <div className="absolute max-w-lg px-2 py-1 duration-300 origin-bottom transform scale-0 -translate-x-1/2 -translate-y-full rounded-lg opacity-0 bg-russian-600 -top-2 left-1/2 group-hover:scale-100 group-hover:opacity-100 text-sylver-100">
                        <span>{message}</span>
                    </div>
                </div>
            )
    }
}