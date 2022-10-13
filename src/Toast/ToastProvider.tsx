import React, { createContext, ReactNode, useReducer } from "react"
import RuiToast from "."
import { RuiToastProps } from "./Toast"

enum ActionEnum {
    ADD_TOAST = 'ADD_TOAST',
    REMOVE_TOAST = 'REMOVE_TOAST'
}

interface ActionProps {
    type: ActionEnum
    payload: RuiToastProps
}

const ToastContext = createContext({
    dispatch: {}
})

const ToastProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer((state: RuiToastProps[], action: ActionProps): RuiToastProps[] => {
        const {type, payload} = action
        switch (type) {
            case "ADD_TOAST":
                return [...state, { ...payload }];
            case "REMOVE_TOAST":
                return state.filter(t => t.id !== payload.id);
            default:
                return [...state];
        }
    }, [])

    return (
        <ToastContext.Provider value={{dispatch}}>
            {children}
            <div className="fixed right-2.5 top-2.5 max-w-xs">
                {state.map(_t => (
                    // @ts-ignore
                    <RuiToast dispatch={dispatch} key={_t.id} {..._t} />
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export default ToastProvider