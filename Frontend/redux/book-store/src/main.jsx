import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)

// Testing in Cypress
if (window.Cypress) {
	window.store = store
}
