import { HTMLAttributes, ReactNode } from 'react';
import { direction } from '../types/Generics';

export interface RuiTooltipProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
    name: string
    message: string
    direction: direction
}