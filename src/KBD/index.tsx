import React from 'react';
import { RuiKBDProps } from './KBD';
// @ts-ignore
import styles from './KBD.module.css'

export const RuiKBD = ({children, color = "teal"}: RuiKBDProps) => {
    return (
        <div className={`${styles.kbd} ${styles[color]}`}>
            {children}
        </div>
    )
}

