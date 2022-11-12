import { color } from '../types/Generics';
import { HTMLAttributes, ReactNode } from 'react';

type accordionColorType = Extract<color, 'amethyst' | 'lazure' | 'citrine' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual' >

type AccordionData = {
    label?: ReactNode
    content?: ReactNode
}
export interface RuiAccordionProps extends HTMLAttributes<HTMLElement> {
    data: AccordionData[]
    fullWidth: boolean
    color?: accordionColorType
}

export const accordionColor: { [key in accordionColorType]: string[] } = {
    amethyst: ["hover:text-amethyst-400 duration-300", "text-amethyst-400"],
    citrine: ["hover:text-citrine-400 duration-300", "text-citrine-400"],
    lazure: ["hover:text-lazure-400 duration-300", "text-lazure-400"],
    jade: ["hover:text-jade-400 duration-300", "text-jade-400"],
    purpalite: ["hover:text-purpalite-400 duration-300", "text-purpalite-400"],
    rosian: ["hover:text-rosian-400 duration-300", "text-rosian-400"],
    scarlet: ["hover:text-scarlet-400 duration-300", "text-scarlet-400"],
    sunstone: ["hover:text-sunstone-400 duration-300", "text-sunstone-400"],
    tingual: ["hover:text-tingual-400 duration-300", "text-tingual-400"],
}