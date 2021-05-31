import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Styles from './Header.module.css'
import Logo from './../../assets/images/logo.png'

export const Header = () => {
    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }

    const links = [
        { label: '+996-507-66-77-04', target: 'tel:+996507667704' },
        { label: 'spaceless.ai@gmail.com', target: 'mailto:spaceless.ai@gmail.com' },
    ]

    return (
        <header className={Styles.header}>
            <div className="container">
                <div className={Styles.main}>
                    <NavLink to="/main" className={Styles.logo}>
                        <img src={Logo} alt="logo"/>
                    </NavLink>
                    <nav className={`${Styles.menu} ${open ? Styles.active : ''}`}>
                        <ul>
                            {
                                links.map(({ label, target }, i) => {
                                    return (
                                        <li key={ i } className={Styles.item}>
                                            <a className={Styles.link} href={ target }>
                                                { label }
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className={`${Styles.hamburger} ${open ? Styles.active : ''}`} onClick={openMenu}>
                        <span className={Styles.line}></span>
                        <span className={Styles.line}></span>
                        <span className={Styles.line}></span>
                    </div>
                </div>
            </div>
        </header>
    )
}
