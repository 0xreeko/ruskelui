import React from 'react'
import { backgroundColor, RuiAvatarProps, sizing } from './Avatar'

export const RuiAvatar = ({ children, size = "md", color = 'amethyst', zoomed, variant, rounded = 'base', src, alt }: RuiAvatarProps) => {
    switch (variant) {
        case 'text':
            return (
                <div className='relative w-fit'>
                    <div className={`overflow-hidden flex justify-center items-center ${backgroundColor[color]} ${sizing[size]} ${rounded === 'base' ? 'rounded-[32%]' : 'rounded-full'}`}>
                        <span>{children}</span>
                    </div>
                    <span className='sr-only'>Avatar Icon</span>
                </div>
            )
        case 'image':
            return (
                <div className='relative w-fit group'>
                    <div className={`overflow-hidden ${sizing[size]} ${rounded === 'base' ? 'rounded-[32%]' : 'rounded-full'} bg-gray-300`}>
                        <img src={src} className={zoomed ? 'group-hover:scale-110 duration-300': ''} alt={alt ? alt : 'ruskel UI placeholder'} />
                    </div>
                    <span className='sr-only'>Avatar Icon</span>
                </div>
            )

        default:
            return (
                <div className='relative w-fit group'>
                    <div className={`overflow-hidden ${sizing[size]} ${rounded === 'base' ? 'rounded-[32%]' : 'rounded-full'} bg-gray-300`}>
                        <img src={src} className={zoomed ? 'group-hover:scale-110 duration-300': ''} alt={alt ? alt : 'ruskel UI placeholder'} />
                    </div>
                    <span className='sr-only'>Avatar Icon</span>
                </div>
            )
    }
}

export default RuiAvatar