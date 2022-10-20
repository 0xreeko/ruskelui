import { HTMLAttributes } from 'react';
import { color } from '../types/Generics';

type variant = 'initials' | 'image'

type rounded = 'base' | 'rounded'

type size = "xs" | "sm" | "md" | "lg" | 'xl'

export const sizing: { [key in size]: string } = {
    "xs": 'w-7 h-7',
    "sm": 'w-9 h-9',
    "md": 'w-11 h-11',
    "lg": 'w-14 h-14',
    "xl": 'w-20 h-20'
}

export const backgroundColor: { [key in color]: string } = {
    amber: 'bg-amber-400',
    amethyst: 'bg-amethyst-400',
    aqua: 'bg-aqua-400',
    azure: 'bg-azure-400',
    bayoux: 'bg-bayoux-400',
    blue: 'bg-blue-400',
    cyan: 'bg-cyan-400',
    emerald: 'bg-emerald-400',
    fuchsia: 'bg-fuchsia-400',
    green: 'bg-green-400',
    indigo: 'bg-indigo-400',
    jade: 'bg-jade-400',
    jasper: 'bg-jasper-400',
    kunzite: 'bg-kunzite-400',
    labrodite: 'bg-labrodite-400',
    lime: 'bg-lime-400',
    moonstone: 'bg-moonstone-400',
    orange: 'bg-orange-400',
    peridot: 'bg-peridot-400',
    pink: 'bg-pink-400',
    purple: 'bg-purple-400',
    red: 'bg-red-400',
    rose: 'bg-rose-400',
    ruby: 'bg-ruby-400',
    russian: 'bg-russian-400',
    scarlet: 'bg-scarlet-400',
    stratos: 'bg-stratos-400',
    sunstone: 'bg-sunstone-400',
    sylver: 'bg-sylver-400',
    teal: 'bg-teal-400',
    violet: 'bg-violet-400',
    yellow: 'bg-yellow-400'
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
    color: color
}