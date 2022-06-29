// Importamos el Router de express
const { Router } = require('express')

// Importamos el JSON de los productos
const products = require('../database/products.json')

// Creamos el router de express
const router = Router()

// Recibe la lista de los productos
router.get('/', (req, res) => {
	res.status(200).json(products)
})

// Exportamos el router
module.exports = router
