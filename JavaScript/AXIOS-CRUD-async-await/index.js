// const miPromesa = new Promise((resolve, reject) => {
// 	console.log('Te prometo que te saludaré cuando pasen 3 segundos!!')
// 	setTimeout(() => {
// 		resolve('Hola')
// 	}, 3000)
// })

// miPromesa.then((value) => console.log(value))

// const miPromesa = new Promise((resolve, reject) => {
// 	let number = Math.floor(Math.random() * (100 - 0 + 1) + 0)
// 	console.log('te prometo que ' + number + ' es menor o igual que 50')
// 	if (number <= 50) {
// 		resolve(number + ' es menor igual a 50')
// 	} else {
// 		reject('mentira')
// 	}
// })

// miPromesa
// 	.then((res) => console.log('res', res))
// 	.catch((error) => console.error('error', error))

// const mezclarIngredientes = () => {
// 	console.log(
// 		'Introducimos las patatas escurridas al bol con la cebolla y el huevo.'
// 	)
// }

// const friendoPatatas = new Promise((resolve) => {
// 	console.log('Aquí andamos, friendo las patatas')

// 	setTimeout(() => {
// 		resolve('HECHO! Patatas fritas. ')
// 	}, 5000)
// })

// friendoPatatas.then((value) => {
// 	console.log(value, 'Ya podemos mezclar las patatas con los huevos batidos!')
// 	mezclarIngredientes()
// })

// fetch('https://jsonplaceholder.typicode.com/users')
// 	.then((res) => res.json())
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err))
