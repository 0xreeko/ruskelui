import { HTMLAttributes } from 'react';

export interface RuiCardProps extends HTMLAttributes<HTMLElement> {
    width?: number
    height?: number
    name?: string
}