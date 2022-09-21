import React from 'react'
import { RuiButtonProps, baseColor, ghostColor, textColor, gradientColor, gradientFlow, threeDeeColor, threeDeeGeeColor, } from './types/Button'

export const RuiButton = ({ children, color = 'amethyst', size = "base", isDisabled = false, variant = "Base", startColor = "fuchsia", endColor = "purple", direction = "topRight" }: RuiButtonProps) => {
  switch (variant) {
    case "Ghost":
      return (
        <button className={`${ghostColor[color]} whitespace-nowrap inline-flex cursor-pointer w-fit items-center transition-all duration-150 ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
          {children}
        </button>
      );
    case "Gradient":
      return (
        <button className={`${gradientFlow[direction]} ${gradientColor[startColor][0]} ${gradientColor[endColor][1]} whitespace-nowrap text-sylver-100 inline-flex cursor-pointer w-fit items-center transition-all duration-200 ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
          {children}
        </button>
      );
    case "Text":
      return (
        <button className={`${textColor[color]} whitespace-nowrap text-sylver-100 inline-flex cursor-pointer w-fit items-center transition-all duration-150 ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
          {children}
        </button>
      );
    case "3D":
      return (
        <div className="inline-block">
          <button className="relative text-white">
            <div className={`w-full h-8 inset-x-0 absolute ${threeDeeColor[color][0]} -bottom-1.5 rounded-lg`}></div>
            <div className={`relative w-10 h-8 px-3 py-1 duration-150 ${threeDeeColor[color][1]} rounded-lg min-w-fit active:translate-y-1 whitespace-nowrap`}>{children}</div>
          </button>
        </div>
      );
    case "3DGradient":
      return (
        <div className="inline-block">
          <button className="relative text-white">
            <div className={`w-full h-8 inset-x-0 absolute ${gradientFlow[direction]} ${threeDeeGeeColor[startColor][2]} ${threeDeeGeeColor[endColor][3]} -bottom-1.5 rounded-lg`}></div>
            <div className={`relative min-w-fit w-10 h-8 ${gradientFlow[direction]} ${threeDeeGeeColor [startColor][0]} ${threeDeeGeeColor[endColor][1]} py-1 px-3 rounded-lg active:translate-y-1 duration-150 whitespace-nowrap`}>
              <span>{children}</span>
            </div>
          </button>
        </div>
      );
    case "Base":
      return (
        <button aria-disabled={isDisabled} disabled={isDisabled} className={`inline-flex w-fit items-center text-sylver-100 ${baseColor[color]} ${isDisabled !== true ? `active:scale-90 whitespace-nowrap cursor-pointer transition-all duration-150` : `pointer-events-none cursor-not-allowed select-none`} ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
          {children}
        </button>
      );
    default:
      return (
        <button aria-disabled={isDisabled} disabled={isDisabled} className={`inline-flex w-fit items-center text-sylver-100 ${baseColor[color]} ${isDisabled !== true ? `active:scale-90 whitespace-nowrap cursor-pointer transition-all duration-150` : `pointer-events-none cursor-not-allowed select-none`} ${size === 'base' ? 'text-m-base px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'text-d-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'text-m-sub2 px-5 py-4 h-11 rounded-[14px]' : ''}`}>
          {children}
        </button>
      );
  }
}

export default RuiButton