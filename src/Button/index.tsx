import React from 'react'
import { RuiButtonProps, textButtonStyles, filledButtonStyles, ghostButtonStyles, socialColorStyles } from './Button'
import { loadingSpinner } from './LoadingSpinner';

const RuiButton = ({ id, form, isLoading, loadingLabel, fullWidth, value, type, children, color = 'amethyst', socialColor = 'twitter', disabled = false, variant = "filled", rightIcon, leftIcon, onClick, ...props }: RuiButtonProps) => {
  switch (variant) {
    case "ghost":
      return (
        <button id={id} form={form} value={value} type={type} onClick={onClick} {...props} className={`flex active:scale-95 rui-padding ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center gap-3 rounded-lg h-9 w-fit font-medium border-2 text-m-copy sm:text-d-copy bg-transparent ${ghostButtonStyles[color]} duration-150 disabled:opacity-50 disabled:pointer-events-none disabled:border-obsidian-800 disabled:text-obsidian-800 dark:disabled:border-obsidian-300 dark:disabled:text-obsidian-300 disabled:select-none`} disabled={disabled}>
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
        <button id={id} form={form} value={value} type={type} onClick={onClick} {...props} className={`flex active:scale-95 rui-padding ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center ${textButtonStyles[color]} gap-3 rounded-lg h-9 w-fit font-medium border-2 text-m-copy sm:text-d-copy border-transparent backdrop-blur-sm duration-150 disabled:pointer-events-none disabled:text-obsidian-800 dark:disabled:text-obsidian-300 disabled:opacity-50 disabled:select-none`} disabled={disabled}>
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
        <button id={id} form={form} value={value} type={type} onClick={onClick} {...props} className={`flex active:scale-95 ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center gap-3 rounded-lg h-9 w-fit font-medium border-2 text-m-copy sm:text-d-copy border-transparent text-onyx dark:text-neropside ${filledButtonStyles[color]} rui-padding duration-150 disabled:pointer-events-none disabled:opacity-50 disabled:bg-obsidian-300 disabled:text-obsidian-800 dark:disabled:bg-obsidian-800 dark:disabled:text-obsidian-300 disabled:select-none`} disabled={disabled}>
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
    case "social":
      return (
        <button {...props} onClick={onClick} className={`flex items-center rui-padding outline-none active:scale-95 gap-3 rounded-lg h-9 w-fit font-medium border-2 text-m-copy sm:text-d-copy border-transparent text-onyx duration-200 ${socialColorStyles[socialColor]} ${fullWidth ? 'w-full' : 'w-fit'}`}>
          {children && <span className='sm'>
            {children}
          </span>}
        </button>
      )
    default:
      return (
        <button id={id} form={form} value={value} type={type} onClick={onClick} {...props} className={`flex active:scale-95 ${fullWidth ? 'w-full' : 'w-fit'} items-center justify-center gap-3 rounded-lg h-9 w-fit font-medium border-2 text-m-copy sm:text-d-copy border-transparent text-onyx dark:text-neropside ${filledButtonStyles[color]} rui-padding duration-150 disabled:pointer-events-none disabled:opacity-50 disabled:bg-obsidian-300 disabled:text-obsidian-800 dark:disabled:bg-obsidian-800 dark:disabled:text-obsidian-300 disabled:select-none`} disabled={disabled}>
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