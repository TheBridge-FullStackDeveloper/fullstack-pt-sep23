import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
