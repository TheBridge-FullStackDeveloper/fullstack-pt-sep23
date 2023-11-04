// 1. GET axios
const getDataBtn = document.getElementById('getDataBtn')
const postDataBtn = document.getElementById('postDataBtn')
const putDataBtn = document.getElementById('putDataBtn')

const postsContainer = document.getElementById('postsContainer')

const inputBody = document.getElementById('inputBody')

const getData = async () => {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		)
		data.forEach((post) => {
			postsContainer.innerHTML += `
				<h2>${post.title}</h2>
				<p>${post.body}</p>
				<button onclick=editData(${post.id})>EDIT</button>
				<button onclick=deleteData(${post.id})>DELETE</button>
			`
		})
	} catch (error) {
		console.error(err)
	}
}

// 2. asignar data a variable global post
// let postsList = []

// axios
// 	.get('https://jsonplaceholder.typicode.com/posts')
// 	.then((res) => {
// 		const { data } = res
// 		postsList = data
// 	})
// 	.catch((err) => console.error(err))

// const getData = () => {
// 	console.log('ppp', postsList)
// 	postsList.forEach((post) => {
// 		postsContainer.innerHTML += `
// 			<h2>${post.title}</h2>
// 			<p>${post.body}</p>
// 			<button onclick=editData(${post.id})>EDIT</button>
// 			<button onclick=deleteData(${post.id})>DELETE</button>
// 		`
// 	})
// }
// 3. POST
const postData = async () => {
	try {
		await axios.post('https://jsonplaceholder.typicode.com/posts', {
			title: 'Titulin',
			body: 'Body title',
		})
	} catch (error) {
		console.error(error)
	}

	// axios
	// 	.post('https://jsonplaceholder.typicode.com/posts', {
	// 		title: 'Titulin',
	// 		body: 'Body title',
	// 	})
	// 	.then((res) => console.log(res))
	// 	.catch((err) => console.error(err))
}

// 4. PUT
const editData = async (id) => {
	try {
		await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			title: 'Post updated',
			body: inputBody.value,
		})
	} catch (error) {
		console.error(error)
	}
}
// 5. DELETE
const deleteData = async (id) => {
	try {
		await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
	} catch (error) {
		console.error(error)
	}
}

getDataBtn.addEventListener('click', getData)
postDataBtn.addEventListener('click', postData)
putDataBtn.addEventListener('click', editData)
