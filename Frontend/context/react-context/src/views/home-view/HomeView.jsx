import React, { useEffect, useContext } from 'react'

import { Character } from '../../components/character/Character'
import { GlobalContext } from '../../context/GlobalState'

const HomeView = () => {
	// const [characters, setCharacters] = useState([])
	const { characters, getCharacters } = useContext(GlobalContext)

	useEffect(() => {
		getCharacters()
	}, [])

	// const getCharacters = async () => {
	// 	try {
	// 		const response = await axios.get(
	// 			'https://rickandmortyapi.com/api/character'
	// 		)
	// 		setCharacters(response.data.results)
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }

	return (
		<>
			<h1>home view</h1>
			{characters.map((character) => (
				<Character
					key={character.id}
					nombre={character.name}
					image={character.image}
				/>
			))}
		</>
	)
}

export default HomeView
