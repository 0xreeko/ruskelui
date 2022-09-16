import React from 'react';
import { RuiKBDProps, textColor } from './types/KBD';
// @ts-ignore
import styles from './modules/KBD.module.css'



export const RuiKBD = ({children, color = "teal"}: RuiKBDProps) => {
    return (
        <div className={`${styles.kbd} ${textColor[color]}`}>
            {children}
        </div>
    )
}

