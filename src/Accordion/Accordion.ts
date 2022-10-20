import { color } from '../types/Generics';
import { HTMLAttributes, ReactNode } from 'react';

type accordionColor = Extract<color, 'amber' | 'amethyst' | 'aqua' | 'azure' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'green' | 'indigo' | 'jade' | 'jasper' | 'kunzite' | 'lime' | 'orange' | 'peridot' | 'pink' | 'purple' | 'red' | 'rose' | 'ruby' | 'scarlet' | 'sunstone' | 'teal' | 'violet' | 'yellow'>

type AccordionData = {
    label?: ReactNode
    content?: ReactNode
}
export interface RuiAccordionProps extends HTMLAttributes<HTMLElement> {
    data: AccordionData[]
    fullWidth: boolean
    color?: accordionColor
}