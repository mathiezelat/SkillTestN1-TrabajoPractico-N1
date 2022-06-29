// Importamos el Router de express
const { Router } = require('express')

// Creamos el router de express
const router = Router()

// Lista de compras de la semana
const shopping = {
	0: ['Manzana', 'Pera'],
	1: ['Naranja', 'Chocolate'],
	2: ['Mandarina', 'Agua', 'Hielos'],
	3: ['Banana', 'Azucar'],
	4: ['Sandia', 'Yerba'],
	5: ['Kiwi'],
}

// Mediante esta ruta recibe la lista de cada día que sea par
router.get('/even-day', (req, res) => {
	const evenDayShopping = []
	for (const key in shopping) {
		if (key % 2 === 0) evenDayShopping.push(shopping[key])
	}
	res.status(200).json(evenDayShopping)
})

// Exportamos el router
module.exports = router
