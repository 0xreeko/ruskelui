import React from "react"
import { RuiTooltipProps } from "./Tooltip"

const RuiTooltip = ({ id, message, children, direction }: RuiTooltipProps) => {
    switch (direction) {
        case 'left':
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    {children}
                    <div className="absolute z-10 px-4 py-2 origin-right -translate-x-full -translate-y-1/2 rounded-lg h-fit top-1/2 -left-3 bg-neropside/80 dark:bg-onyx/80 dark:text-neropside group-hover:flex text-onyx ">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            );
        case 'topLeft':
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    <p>{children}</p>
                    <div className="absolute z-10 px-4 py-2 origin-bottom-right -translate-x-full -translate-y-full rounded-lg h-fit bg-neropside/80 -top-2 -left-3 group-hover:flex text-onyx dark:bg-onyx/80 dark:text-neropside">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        case 'top':
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    {children}
                    <div className="absolute z-10 hidden px-4 py-2 origin-bottom -translate-x-1/2 -translate-y-full rounded-lg h-fit bg-neropside/80 -top-2 left-1/2 group-hover:flex text-onyx dark:bg-onyx/80 dark:text-neropside">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        case 'topRight':
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    <p>{children}</p>
                    <div className="absolute z-10 hidden px-4 py-2 origin-bottom-left translate-x-full -translate-y-full rounded-lg h-fit bg-neropside/80 -top-2 -right-3 group-hover:flex text-onyx dark:bg-onyx/80 dark:text-neropside">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        case 'right':
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    {children}
                    <div className="absolute z-10 hidden px-4 py-2 origin-left translate-x-full -translate-y-1/2 rounded-lg h-fit bg-neropside/80 top-1/2 -right-3 group-hover:flex text-onyx dark:bg-onyx/80 dark:text-neropside">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        case 'bottomRight':
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    {children}
                    <div className="absolute z-10 hidden px-4 py-2 origin-top-left translate-x-full translate-y-1/2 rounded-lg h-fit bg-neropside/80 top-1/2 -right-3 group-hover:flex text-onyx dark:bg-onyx/80 dark:text-neropside">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        case 'bottom':
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    {children}
                    <div className="absolute z-10 hidden px-4 py-2 origin-bottom -translate-x-1/2 translate-y-full rounded-lg h-fit bg-neropside/80 -bottom-2 left-1/2 group-hover:flex text-onyx dark:bg-onyx/80 dark:text-neropside">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        case 'bottomLeft':
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    {children}
                    <div className="absolute z-10 hidden px-4 py-2 origin-top-right -translate-x-full translate-y-1/2 rounded-lg h-fit top-1/2 -left-3 bg-neropside/80 group-hover:flex text-onyx dark:bg-onyx/80 dark:text-neropside">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
        default:
            return (
                <div role={'tooltip'} id={id} className="relative inline-block cursor-default group">
                    {children}
                    <div className="absolute z-10 hidden px-4 py-2 origin-bottom -translate-x-1/2 -translate-y-full rounded-lg h-fit bg-neropside/80 -top-2 left-1/2 group-hover:flex text-onyx dark:bg-onyx/80 dark:text-neropside">
                        <span className="relative text-sm leading-none whitespace-nowrap">{message}</span>
                    </div>
                </div>
            )
    }
}

export default RuiTooltip