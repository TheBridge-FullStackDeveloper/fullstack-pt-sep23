// Kata isograma

// const isIsogram = (string) => {
// 	const text = string.toLowerCase()
// 	const arrayString = []

// 	for (let i = 0; i < text.length; i++) {
// 		if (arrayString.includes(text[i])) return false
// 		arrayString.push(text[i])
// 	}
// 	return true
// }

// console.log(isIsogram('PerRo'))

const toLower = (text = '') => {
	return text.toLowerCase()
}

const isIsogram = (string) => {
	const str = toLower(string)
	const array = []

	for (let i = 0; i < str.length; i++) {
		if (array.includes(str[i])) return false
		array.push(str[i])
	}

	return true
}
