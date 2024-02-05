import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainMenu from './components/main-menu/MainMenu'
import HomeView from './views/home-view/HomeView'
import ProfileView from './views/profile-view/ProfileView'
import { GlobalProvider } from './context/GlobalState'

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<MainMenu />
				<Routes>
					<Route path="/" element={<HomeView />} />
					<Route path="/profile" element={<ProfileView />} />
				</Routes>
			</BrowserRouter>
		</GlobalProvider>
	)
}

export default App
