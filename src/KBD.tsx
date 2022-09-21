import React from 'react';
import { RuiKBDProps } from './types/KBD';
// @ts-ignore
import styles from './modules/KBD.module.css'

export const RuiKBD = ({children, color = "teal"}: RuiKBDProps) => {
    return (
        <div className={`${styles.kbd} ${styles[color]}`}>
            {children}
        </div>
    )
}

