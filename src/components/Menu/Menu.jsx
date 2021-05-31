import React from 'react'
import Styles from './Menu.module.css'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    const links = [
        { label: 'главная', path: '/main' },
        { label: 'о нас', path: '/aboutus' },
        { label: 'курсы', path: '/courses' },
        { label: 'менторы', path: '/mentors' },
    ]

    return (
        <nav className={Styles.menu}>
            <ul>
                {
                    links.map(({ label, path }, i) => {
                        return (
                            <li key={ i } className={Styles.item}>
                                <NavLink className={Styles.link} activeClassName={Styles.linkActive} to={ path }>
                                    { label }
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
