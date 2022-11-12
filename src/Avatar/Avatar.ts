import { HTMLAttributes } from 'react';
import { color } from '../types/Generics';

type variant = 'text' | 'image'

type rounded = 'base' | 'rounded'

type size = "xs" | "sm" | "md" | "lg" | 'xl'

type avatarColorType = Extract<color, 'amethyst' | 'lazure' | 'citrine' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual' >

export const sizing: { [key in size]: string } = {
    "xs": 'w-7 h-7',
    "sm": 'w-9 h-9',
    "md": 'w-11 h-11',
    "lg": 'w-14 h-14',
    "xl": 'w-20 h-20'
}

export const backgroundColor: { [key in avatarColorType]: string } = {
    amethyst: 'bg-amethyst-400',
    lazure: 'bg-lazure-400',
    citrine: 'bg-citrine-400',
    jade: 'bg-jade-400',
    purpalite: 'bg-purpalite-400',
    rosian: 'bg-rosian-400',
    scarlet: 'bg-scarlet-400',
    sunstone: 'bg-sunstone-400',
    tingual: 'bg-tingual-400',
}

export interface RuiAvatarProps extends HTMLAttributes<HTMLImageElement> {
    size: size
    src: string
    alt: string
    badgeColor: color
    variant: variant
    rounded: rounded
    zoomed: boolean
    initials: string
    color: avatarColorType
}