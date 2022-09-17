import { HTMLAttributes, ReactNode } from 'react';
import { direction } from './Generics';

export interface RuiTooltipProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
    name: string
    message: string
    direction: direction
}