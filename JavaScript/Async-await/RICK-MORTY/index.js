const API_URL = 'https://rickandmortyapi.com/api/character/'
const charactersContainer = document.querySelector('#characters')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')

const showCharacters = (characters) => {
	charactersContainer.innerHTML = ''
	characters.forEach((character) => {
		charactersContainer.innerHTML += `
    	<div class="card col-lg-3 col-xs-12 col-md-6 m-2">
				<img src="${character.image}" alt="Card image">
				<div class="card-body">
						<h3 class="card-header">${character.name}</h3>
						<h5 class="card-title">${character.status}</h5>
					</div>
     	</div>
		`
	})
}

const searchCharacter = async (e) => {
	e.preventDefault()
	try {
		const search = searchInput.value
		const res = await axios.get(`${API_URL}?name=${search}`)
		const characters = res.data.results
		showCharacters(characters)
	} catch (error) {
		console.error(error)
	}
}

formSearch.addEventListener('submit', searchCharacter)
