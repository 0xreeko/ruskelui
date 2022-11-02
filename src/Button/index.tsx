import React from 'react'
import { RuiButtonProps, textButtonStyles, sizing, filledButtonStyles, ghostButtonStyles, } from './Button'
import { loadingSpinner } from './LoadingSpinner';

export const RuiButton = ({ id, form, isLoading, loadingLabel, fullWidth, value, type, ripple, children, color = 'amethyst', size = "sm", disabled = false, variant = "filled", rightIcon, leftIcon, onClick }: RuiButtonProps) => {
  switch (variant) {
    case "ghost":
      return (
        <button id={id} form={form} value={value} type={type} onClick={onClick} data-ripple={ripple === true} className={`flex active:scale-95 ${sizing[size]} ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center gap-3 rounded-[9px] border-[1.5px] bg-transparent ${ghostButtonStyles[color]} text-sm duration-150 disabled:pointer-events-none disabled:border-gray-300 disabled:text-gray-300 disabled:select-none`} disabled={disabled}>
          {isLoading ? (
            <>
              {loadingSpinner}
              <span>{loadingLabel}</span>
            </>
          ) : (
            <>
              {leftIcon && leftIcon}
              <span>{children}</span>
              {rightIcon && rightIcon}
            </>
          )
          }
        </button>
      );
    case "text":
      return (
        <button id={id} form={form} value={value} type={type} onClick={onClick} data-ripple={ripple === true} className={`flex active:scale-95 ${sizing[size]} ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center ${textButtonStyles[color]} gap-3 rounded-[9px] border-[1.5px] border-transparent text-sm backdrop-blur-sm duration-150 disabled:pointer-events-none disabled:text-gray-300 disabled:select-none`} disabled={disabled}>
          {isLoading ? (
            <>
              {loadingSpinner}
              <span>{loadingLabel}</span>
            </>
          ) : (
            <>
              {leftIcon && leftIcon}
              <span>{children}</span>
              {rightIcon && rightIcon}
            </>
          )
          }
        </button>
      );
    case "filled":
      return (
        <button id={id} form={form} value={value} type={type} onClick={onClick} data-ripple={ripple === true} className={`flex active:scale-95 ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center gap-3 rounded-[9px] border-[1.5px] border-transparent ${filledButtonStyles[color]} ${sizing[size]} text-sm text-white duration-150 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-300 dark:disabled:bg-gray-800 dark:disabled:text-gray-700 disabled:select-none`} disabled={disabled}>
          {isLoading ? (
            <>
              {loadingSpinner}
              <span>{loadingLabel}</span>
            </>
          ) : (
            <>
              {leftIcon && leftIcon}
              <span>{children}</span>
              {rightIcon && rightIcon}
            </>
          )
          }
        </button>
      );
    case "icon":
      return (
        <button id={id} form={form} value={value} type={type} onClick={onClick} data-ripple={ripple === true} className={`flex active:scale-95 ${fullWidth ? 'w-full' : 'w-fit'} px-3 items-center justify-center rounded-[9px] bg-sylver-100 dark:bg-russian-800 dark:active:bg-gray-900/80 active:bg-gray-200 py-1.5 duration-150 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-300 dark:disabled:bg-gray-800 dark:disabled:text-gray-700 disabled:select-none`} disabled={disabled}>
          {children}
        </button>
      )
    default:
      return (
        <button id={id} form={form} value={value} type={type} onClick={onClick} data-ripple={ripple === true} className={`flex active:scale-95 ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center gap-3 rounded-[9px] border-[1.5px] border-transparent ${filledButtonStyles[color]} ${sizing[size]} text-sm text-white duration-150 disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-300 dark:disabled:bg-gray-800 dark:disabled:text-gray-700 disabled:select-none`} disabled={disabled}>
          {isLoading ? (
            <>
              {loadingSpinner}
              <span>{loadingLabel}</span>
            </>
          ) : (
            <>
              {leftIcon && leftIcon}
              <span>{children}</span>
              {rightIcon && rightIcon}
            </>
          )
          }
        </button>
      );
  }
}

export default RuiButton