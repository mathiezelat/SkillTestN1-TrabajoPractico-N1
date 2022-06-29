// Importamos el Router de express
const { Router } = require('express')

// Creamos el router de express
const router = Router()

// Una lista de 3 contraseñas distintas
const passwords = [
	'contraseñadepepabiensegura',
	'contraseñadepepabiensegura1',
	'contraseñadepepabiensegura123456789',
]

// Recibe solamente la contraseña que coincide con al expresión regular y si no recibe que ninguna contraseña coincide
router.get('/', (req, res) => {
	const regex = /[contraseñadepepabiensegura]+[1-9]\w+/g

	const password = passwords.find(password => regex.test(password))

	if (password) {
		res.status(200).send(
			`Contraseña que coincide con la expresión regular: ${password}`
		)
	} else {
		res.status(200).send(
			'Ninguna contraseña coincide con la expresión regular'
		)
	}
})

// Exportamos el router
module.exports = router
