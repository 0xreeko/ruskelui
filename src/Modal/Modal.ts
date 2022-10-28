import { DialogHTMLAttributes, LegacyRef, ReactNode } from "react"

type size = "sm" | "md" | "lg"

export interface RuiModalProps extends DialogHTMLAttributes<HTMLDialogElement> {    
    children: ReactNode
    size: size
    pointer: LegacyRef<HTMLDialogElement> | undefined
}