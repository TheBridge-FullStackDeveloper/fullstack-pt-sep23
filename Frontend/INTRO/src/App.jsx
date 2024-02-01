import './App.css'
import WelcomeC from './components/WelcomeC/WelcomeC'
import WelcomeF from './components/WelcomeF/WelcomeF'

const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number, index) => <li key={index}>{number}</li>)

const users = [
	'Olatz',
	'Dani',
	'Eder',
	'Adrian',
	'Iker',
	'Evgeny',
	'Arantza',
	'Patopatata',
]
function App() {
	return (
		<div>
			{users.map((user, index) => (
				<WelcomeF key={index} name={user} />
			))}

			{/* <WelcomeC name="Patricia" />
			<WelcomeF name="Olatz" />
			<WelcomeF name="Dani" />
			<WelcomeF name="Eder" />
			<WelcomeF name="Adrian" />
			<WelcomeF name="Iker" />
			<WelcomeF name="Evgeníííí^j" /> */}
			{/* <ul>{listItems}</ul> */}
		</div>
	)
}

export default App
