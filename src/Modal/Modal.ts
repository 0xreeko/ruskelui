import { DialogHTMLAttributes, LegacyRef, ReactNode } from "react"

type size = 'xs' | "sm" | "md" | "lg" | 'xl'

export interface RuiModalProps extends DialogHTMLAttributes<HTMLDialogElement> {    
    children: ReactNode
    size: size
    pointer: LegacyRef<HTMLDialogElement> | undefined
}