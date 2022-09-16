import { HTMLAttributes, ReactNode } from 'react';

export interface RuiTooltipProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
    name: string
    message: string
}