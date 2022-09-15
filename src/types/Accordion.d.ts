import { color } from './Generics';
import { ReactNode } from 'react';

type AccordionData = {
    label?: ReactNode
    content?: ReactNode
}
export interface AccordionProps extends HTMLAttributes<HTMLElement> {
    data: AccordionData[]
    fullWidth: boolean
    color?: color
}