// Importamos las dependencias
const express = require('express')
const morgan = require('morgan')
// Importamos las rutas
const productsRoute = require('./routes/products.js')
const shoppingRoute = require('./routes/shopping.js')
const starwarsRoute = require('./routes/starwars.js')
const passwordRoute = require('./routes/password.js')

// Creamos la aplicación de express
const app = express()

// Establecemos el middleware de morgan
app.use(morgan('tiny'))

// Establecemos el puerto del servidor
app.set('port', process.env.PORT || 3000)

// Establecemos las rutas
app.get('/', (req, res) => {
	res.status(200).send(`
        <h1>Hola pepa!</h1>
        <p>Bienvenida a tu servidor bien piola! :)</p>
    `)
})

app.use('/products', productsRoute)

app.use('/shopping', shoppingRoute)

app.use('/starwars', starwarsRoute)

app.use('/password', passwordRoute)

// Página 404 en caso de no encontrar una ruta
app.use((req, res) => {
	res.status(404).send('Página no encontrada')
})

// Iniciamos el servidor de express con el puerto anteriormente establecido
app.listen(app.get('port'), () => {
	console.log(`Servidor escuchando en el puerto ${app.get('port')}`)
})
