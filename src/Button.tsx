import React from 'react'
import { RuiButtonProps, baseColor, ghostColor, textColor, gradientColor, gradientFlow,  } from './types/Button'
// @ts-ignore
import styles from './modules/Button.module.css'

const Outline = ({ children, color = "amethyst", size = "base", }: RuiButtonProps) => (
  <button className={`${ghostColor[color]} whitespace-nowrap inline-flex cursor-pointer w-fit items-center transition-all duration-150 ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
    {children}
  </button>
)

const Text = ({ children, color = "amethyst", size = "base" }: RuiButtonProps) => (
  <button className={`${textColor[color]} whitespace-nowrap text-sylver-100 inline-flex cursor-pointer w-fit items-center transition-all duration-150 ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
    {children}
  </button>
)

const Gradient = ({ children, size = "base", startColor = "fuchsia", endColor = "purple", direction = "topRight" }: RuiButtonProps) => (
  <button className={`${gradientFlow[direction]} ${gradientColor[startColor][0]} ${gradientColor[endColor][1]} whitespace-nowrap text-sylver-100 inline-flex cursor-pointer w-fit items-center transition-all duration-200 ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
    {children}
  </button>
)

export const RuiButton = ({ children, color = 'amethyst', size = "base", isDisabled = false }: RuiButtonProps) => {
  return (
    <button aria-disabled={isDisabled} disabled={isDisabled} className={`inline-flex w-fit items-center text-sylver-100 ${baseColor[color]} ${isDisabled !== true ? `active:scale-90 whitespace-nowrap cursor-pointer transition-all duration-150` : `pointer-events-none cursor-not-allowed select-none`} ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
      {children}
    </button>
  )
}

RuiButton.Outline = Outline
RuiButton.Text = Text
RuiButton.Gradient = Gradient


export default RuiButton