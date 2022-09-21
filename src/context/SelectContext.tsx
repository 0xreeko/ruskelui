import { createContext } from "react";

interface Props {
    currentValue: string
    label: string
    handleChange?: (args: string) => void
}

export const SelectContext = createContext<Props>({
    currentValue: '',
    label: '',
})