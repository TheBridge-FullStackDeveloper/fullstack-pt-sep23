import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import TheHeader from './components/TheHeader/TheHeader'

function App() {
	return (
		<BrowserRouter>
			<TheHeader />
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
