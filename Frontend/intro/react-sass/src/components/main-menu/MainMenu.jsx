import React from 'react'
import './MainMenu.style.scss'

const MainMenu = () => {
	return (
		<div>
			<h1>main menu</h1>
			<nav className="main-menu">
				<ul className="main-menu__list">
					<li className="main-menu__item">
						<a href="#" className="main-menu__link">
							Home
						</a>
					</li>
					<li className="main-menu__item">
						<a href="#" className="main-menu__link">
							Contact
						</a>
					</li>
					<li className="main-menu__item">
						<a href="#" className="main-menu__link main-menu__link--actived">
							Profile
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default MainMenu
