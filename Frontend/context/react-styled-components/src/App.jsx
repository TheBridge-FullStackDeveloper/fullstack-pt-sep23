import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './assets/styles/Theme'

import GlobalStyles from './assets/styles/GlobalStyles'
import BaseButton from './components/BaseButton'

function App() {
	const [theme, setTheme] = useState(lightTheme)

	const handleTheme = () => {
		if (theme === lightTheme) {
			setTheme(darkTheme)
		} else {
			setTheme(lightTheme)
		}
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<button onClick={handleTheme}>Cambio tema</button>
				{/* <BaseButton onClick={() => paseAlgo(Dark)} /> */}
			</ThemeProvider>
		</>
	)
}

export default App
