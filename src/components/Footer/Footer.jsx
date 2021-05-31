import React from 'react'
import { useImport } from '../../hooks/useImport.hook'
import Styles from './Footer.module.css'

export const Footer = () => {
    const { importAll } = useImport()
    const icons = importAll(require.context('./../../assets/social', false, /\.(png|jpe?g|svg)$/))

    const links = [
        { icon: icons[1].default, name: 'instagram', url: 'https://instagram.com/spaceless.ai?igshid=1uwt6ru1q6ehf' },
        { icon: icons[2].default, name: 'facebook', url: 'https://telegram.im/@spaceless79' },
        { icon: icons[3].default, name: 'whatsapp', url: 'https://api.whatsapp.com/send?phone=996709039079' },
    ]

    return (
        <footer className={Styles.footer}>
            <div className="container">
                <ul className={Styles.social}>
                    {
                        links.map(({ icon, name, url }, i) => {
                            return (
                                <li key={ i } className={Styles.item}>
                                    <a href={ url } className={Styles.link} target="_blank" rel="noreferrer">
                                        <img src={ icon } alt={ name }/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}
