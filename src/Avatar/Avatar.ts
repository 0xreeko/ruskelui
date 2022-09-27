import { HTMLAttributes } from 'react';
import { color } from '../types/Generics';

type variant = 'base' | 'rounded'

type size = 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24;

export interface RuiAvatarProps extends HTMLAttributes<HTMLImageElement> {
    size: size
    src: string
    alt: string
    badgeColor: color
    variant: variant
}