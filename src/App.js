import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Styles from './App.module.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Menu } from './components/Menu/Menu'
import { Scene } from './components/Scene/Scene'

export const App = () => {
  	return (
		<Router>
			<div className={Styles.app}>
				<Header />
				<div className={`${Styles.content} ${Styles.backgroundColor}`}>
					<Menu />
					<Scene />
				</div>
				<Footer />
			</div>
			<Redirect to="/main" />
		</Router>
  	)
}