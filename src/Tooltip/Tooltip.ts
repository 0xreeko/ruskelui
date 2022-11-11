import { HTMLAttributes } from 'react';
import { direction } from '../types/Generics';

export interface RuiTooltipProps extends HTMLAttributes<HTMLElement> {
    message: string
    direction: direction
}