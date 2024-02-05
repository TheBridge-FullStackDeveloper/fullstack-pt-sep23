import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.style.scss'

const MainMenu = () => {
	return (
		<>
			<nav className="main-menu">
				<ul className="main-menu__list">
					<li className="main-menu__item">
						<Link to="/" className="main-menu__link">
							Home
						</Link>
					</li>
					<li className="main-menu__item">
						<Link to="#" className="main-menu__link">
							Contact
						</Link>
					</li>
					<li className="main-menu__item">
						<Link
							to="/profile"
							className="main-menu__link main-menu__link--actived"
						>
							Profile
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default MainMenu
