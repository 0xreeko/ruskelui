import React from "react"
import { RuiModalProps } from "./Modal";
// @ts-ignore
import styles from './Modal.module.css'

export const RuiModal = ({ id, children, size = "md", pointer }: RuiModalProps) => {
	const sizing: { [key in typeof size]: string } = {
		'xl': 'max-w-xl',
		'lg': 'max-w-lg',
		'md': 'max-w-md',
		'sm': 'max-w-sm',
		'xs': 'max-w-xs',
	}
	return (
		<dialog id={id} ref={pointer} className={`p-4 w-full ${sizing[size]} ${styles.modal} text-neropside dark:text-onyx  border-obsidian-300 bg-onyx/80 dark:border-obsidian-800 dark:bg-neropside/80`}>
				{children}
			</dialog>
	)
}

export default RuiModal