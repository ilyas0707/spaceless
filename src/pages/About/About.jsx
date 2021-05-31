import React from 'react'
import Styles from './About.module.css'
import LogoText from './../../assets/images/logoText.png'

export const About = () => {
    return (
        <div className={Styles.about}>
            <div className={Styles.item}>
                <h2 className={Styles.heading}>кто мы? <span></span></h2>
                <p className={Styles.text}>
                    <span>
                        <img src={LogoText} alt="logoText" />
                    </span>{' '}
                    помогает людям достичь своих целей и жить без границ.
                </p>
            </div>
            <div className={Styles.item}>
                <div className={Styles.space}>
                    <div className={`${Styles.planet} ${Styles.mine}`}>
                        <img src={LogoText} alt="logoText" />
                    </div>
                </div>
            </div>
        </div>
    )
}
