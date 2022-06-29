// Importamos el Router de express
const { Router } = require('express')

// Importamos Axios
const axios = require('axios')

// Creamos el router de express
const router = Router()

// Recibe una llamada de una API externa de Star Wars y si falla devuelve un error 500
router.get('/', async (req, res) => {
	try {
		const { data } = await axios.get('https://swapi.dev/api/films')
		const { results } = data

		res.status(200).json(results)
	} catch (error) {
		res.status(500).send('Internal Server Error')
	}
})

// Exportamos el router
module.exports = router
