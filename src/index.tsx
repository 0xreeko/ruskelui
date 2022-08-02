import React, { FC, HTMLAttributes, ReactChild } from 'react';
import './tailwind.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};


export * from './Accordion'
export * from './Avatar'
export * from './Breadcrumbs'
export * from './Button'
export * from './Checkbox'
export * from './CryptoLogo'
export * from './Dropdown'
export * from './Input'
export * from './KBD'
export * from './Loader'
export * from './Pill'
export * from './ProgressBar'
export * from './ProgressDonut'
export * from './Search'
export * from './Toggle'
export * from './Tooltip'