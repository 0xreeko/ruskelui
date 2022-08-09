import React, { HTMLAttributes, ReactNode } from "react"

export interface Props extends HTMLAttributes<HTMLElement> {
    /** Provide a static label for Input */
    children: ReactNode;
    /** Provide a static placeholder for Input */
    name: string;
    message: string;
}

export const RuiTooltip = ({ name, message, children }: Props) => {
    return (
        <div className="py-12" >
            <div role={'tooltip'} id={name} title={name} className="relative flex-col inline-block group text-russian-600 dark:text-sylver-100">
                {children}
                <div className="absolute bottom-0 flex-col items-center justify-center hidden mb-6 group-hover:flex">
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap rounded-md min-w-fit bg-russian-600">{message}</span>
                    <div className="w-3 h-3 -mt-2 rotate-45 shadow-lg bg-russian-600"></div>
                </div>
            </div>
        </div>
    )
}