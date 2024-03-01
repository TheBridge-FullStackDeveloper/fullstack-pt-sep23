import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import TheHeader from './components/TheHeader/TheHeader'
import Home from './components/Home/Home'
import PostDetail from './components/Posts/PostDetail/PostDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<TheHeader />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/post/:id" element={<PostDetail />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
