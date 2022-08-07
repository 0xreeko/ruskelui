import React, { HTMLAttributes } from 'react'
import { avatarSize, colorType } from './utils'
// @ts-ignore
import styles from './modules/Avatar.module.css'

export interface Props extends HTMLAttributes<HTMLImageElement> {
    /** Choose one the scalar options for Avatar */
    size: avatarSize
    /** Provide a radius type for Avatar */
    rounded: 'base' | 'full'
    /** Provide an image for Avatar */
    imageUrl: string
    /** Provide an alt for Avatar's image */
    altTag: string
    badgeColor?: colorType
}

export const RuiAvatar = ({ size = 6, rounded = 'base', imageUrl, altTag }: Props) => {
    return (
        <div className='relative w-fit'>
            <div className={`overflow-hidden ${size === 6 ? 'w-6 h-6' : size === 7 ? 'w-7 h-7' : size === 8 ? 'w-8 h-8' : size === 9 ? 'w-9 h-9' : size === 10 ? 'w-10 h-10' : size === 11 ? 'w-11 h-11' : size === 12 ? 'w-12 h-12' : size === 14 ? 'w-14 h-14' : size === 16 ? 'w-16 h-16' : size === 20 ? 'w-20 h-20' : 'w-24 h-24'} ${rounded === 'base' ? 'rounded-[32%]' : 'rounded-full'} bg-gray-300`}>
                <img src={imageUrl} alt={altTag ? altTag : 'ruskel UI placeholder'} />
            </div>
        </div>
    )

}