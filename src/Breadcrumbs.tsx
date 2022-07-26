import React from 'react'
// @ts-ignore
import styles from './modules/Breadcrumbs.module.css'

export const RuiBreadcrumbs = () => {

    return (
        <div className="font-sans text-d-copy">
            <ul className={styles.wrap}>
                <li className={styles.inactive}><a href="#" className={`before:content-['']`}>Home</a></li>
                <li className={styles.inactive}><a href="#" className={`before:content-['']`}>Projects</a></li>
                <li>Mirmo Dashboard</li>
            </ul>
        </div>
    )
}