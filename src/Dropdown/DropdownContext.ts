import { createContext, Dispatch, SetStateAction } from "react";

interface Props {
    activeDrop: string
    setActiveDrop?: Dispatch<SetStateAction<string>>
    menuHeight?: number | null
    calcHeight?: (_el: any) => void
}

export const DropdownContext = createContext<Props>({
    activeDrop: 'main'
})