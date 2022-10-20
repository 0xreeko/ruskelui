import React from 'react';
import { RuiKBDProps } from './KBD';
// @ts-ignore
import styles from './KBD.module.css'

export const RuiKBD = ({id, children, color = "teal"}: RuiKBDProps) => {
    return (
        <div id={id} className={`${styles.kbd} ${styles[color]}`}>
            {children}
        </div>
    )
}

