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

// const colorVar: { [key in colorType]: string } = {
//     amber: "w-3 h-3 bg-amber-600",
//     amethyst: "w-3 h-3 bg-amethyst-600",
//     aqua: "w-3 h-3 bg-aqua-600",
//     azure: "w-3 h-3 bg-azure-600",
//     blue: "w-3 h-3 bg-blue-600",
//     cyan: "w-3 h-3 bg-cyan-600",
//     emerald: "w-3 h-3 bg-emerald-600",
//     fuchsia: "w-3 h-3 bg-fuchsia-600",
//     green: "w-3 h-3 bg-green-600",
//     indigo: "w-3 h-3 bg-indigo-600",
//     jade: "w-3 h-3 bg-jade-600",
//     jasper: "w-3 h-3 bg-jasper-600",
//     kunzite: "w-3 h-3 bg-kunzite-600",
//     lime: "w-3 h-3 bg-lime-600",
//     moonstone: "w-3 h-3 bg-moonstone-600",
//     orange: "w-3 h-3 bg-orange-600",
//     peridot: "w-3 h-3 bg-peridot-600",
//     pink: "w-3 h-3 bg-pink-600",
//     purple: "w-3 h-3 bg-purple-600",
//     rose: "w-3 h-3 bg-rose-600",
//     ruby: "w-3 h-3 bg-ruby-600",
//     russian: "w-3 h-3 bg-russian-600",
//     scarlet: "w-3 h-3 bg-scarlet-600",
//     stratos: "w-3 h-3 bg-stratos-600",
//     sunstone: "w-3 h-3 bg-sunstone-600",
//     sylver: "w-3 h-3 bg-sylver-600",
//     teal: "w-3 h-3 bg-teal-600",
//     violet: "w-3 h-3 bg-violet-600",
//     yellow: "w-3 h-3 bg-yellow-600"
// }

export const RuiAvatar = ({ size = 6, rounded = 'base', imageUrl, altTag }: Props) => {
    return (
        <div className='relative w-fit'>
            <div className={`overflow-hidden ${size === 6 ? 'w-6 h-6' : size === 7 ? 'w-7 h-7' : size === 8 ? 'w-8 h-8' : size === 9 ? 'w-9 h-9' : size === 10 ? 'w-10 h-10' : size === 11 ? 'w-11 h-11' : size === 12 ? 'w-12 h-12' : size === 14 ? 'w-14 h-14' : size === 16 ? 'w-16 h-16' : size === 20 ? 'w-20 h-20' : 'w-24 h-24'} ${rounded === 'base' ? 'rounded-[32%]' : 'rounded-full'} bg-gray-300`}>
                <img src={imageUrl} alt={altTag} />
            </div>
        </div>
        //     <div className='relative w-fit'>
    //     <div className="p-0.5 to-sunstone-500 rounded-full bg-gradient-to-tr from-orange-500">
    //         <div className={`overflow-hidden ring-transparent ring-2  ${size === 6 ? 'w-6 h-6' : size === 7 ? 'w-7 h-7' : size === 8 ? 'w-8 h-8' : size === 9 ? 'w-9 h-9' : size === 10 ? 'w-10 h-10' : size === 11 ? 'w-11 h-11' : size === 12 ? 'w-12 h-12' : size === 14 ? 'w-14 h-14' : size === 16 ? 'w-16 h-16' : size === 20 ? 'w-20 h-20' : 'w-24 h-24'} ${rounded === 'base' ? 'rounded-[32%]' : 'rounded-full'}`}>
    //             <a className="block p-0.5 bg-sylver-100 rounded-full" href="https://twitter.com/0xreeko" target="_blank">
    //                 <img className="rounded-full" src={imageUrl} alt={altTag} />
    //             </a>
    //             <span className={`absolute ring-[1px] ring-sylver-100 right-1 bottom-0.5 ${rounded === 'base' ? 'rounded-[32%]' : 'rounded-full'} ${badgeColor ? colorVar[badgeColor] : ''}`}></span>
    //         </div>
    //     </div>
    // </div>
    )

}