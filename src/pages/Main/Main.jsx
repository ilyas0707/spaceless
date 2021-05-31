import React from 'react'
import { NavLink } from 'react-router-dom'
import Arrow from './../../assets/images/arrow.png'
import Styles from './Main.module.css'

export const Main = () => {
    return (
        <div className={Styles.main}>
            <h1 className={Styles.heading}>it и английские курсы</h1>
            <p className={Styles.text}>Сейчас идеальное время, чтобы начать свое собственное путешествие с IT <br/> и английским языком. Жизнь без границ.</p>
            <NavLink className={Styles.button} to="/aboutus">
                <img src={Arrow} alt="arrow"/>
            </NavLink>
        </div>
    )
}
