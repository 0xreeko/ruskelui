import React from 'react'
import { RuiButtonProps, textButtonStyles, sizing, baseButtonStyles, ghostButtonStyles, } from './Button'

export const RuiButton = ({ children, color = 'amethyst', size = "sm", disabled = false, variant = "filled", rightIcon, leftIcon }: RuiButtonProps) => {
  switch (variant) {
    case "ghost":
      return (
        <button type="button" className={`flex ${sizing[size]} w-fit items-center gap-3 rounded-[9px] border-[1.5px] bg-transparent ${ghostButtonStyles[color]} text-sm duration-150 disabled:pointer-events-none disabled:border-gray-300 disabled:text-gray-300 disabled:select-none`} aria-readonly={disabled} disabled={disabled}>
          {leftIcon && leftIcon}
          <span>{children}</span>
          {rightIcon && rightIcon}
        </button>
      );
    case "text":
      return (
        <button type="button" className={`flex ${sizing[size]} w-fit items-center ${textButtonStyles[color]} gap-3 rounded-[9px] border-[1.5px] border-transparent text-sm backdrop-blur-sm duration-150 disabled:pointer-events-none disabled:text-gray-300 disabled:select-none`} aria-readonly={disabled} disabled={disabled}>
          {leftIcon && leftIcon}
          <span>{children}</span>
          {rightIcon && rightIcon}
        </button>
      );
    case "filled":
      return (
        <button type="button" className={`flex w-fit items-center gap-3 rounded-[9px] border border-transparent ${baseButtonStyles[color]} ${sizing[size]} text-sm text-white duration-150 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-300 dark:disabled:bg-gray-800 dark:disabled:text-gray-700 disabled:select-none`} aria-readonly={disabled} disabled={disabled}>
          {leftIcon && leftIcon}
          <span>{children}</span>
          {rightIcon && rightIcon}
        </button>
      );
    case "icon":
      return (
        <button type="button" className="flex w-fit px-3 items-center rounded-[9px] bg-sylver-100 dark:bg-russian-800 dark:active:bg-gray-900/80 active:bg-gray-200 py-1.5 duration-150 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-300 dark:disabled:bg-gray-800 dark:disabled:text-gray-700 disabled:select-none" aria-readonly={disabled} disabled={disabled}>
         {children}
        </button>
      )
    default:
      return (
        <button className={`flex w-fit items-center gap-3 rounded-[9px] border border-transparent ${baseButtonStyles[color]} ${sizing[size]} text-sm text-white duration-150 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-300 dark:disabled:bg-gray-800 dark:disabled:text-gray-700 disabled:select-none`} aria-readonly={disabled} disabled={disabled}>
          {leftIcon && leftIcon}
          <span>{children}</span>
          {rightIcon && rightIcon}
        </button>
      );
  }
}

export default RuiButton