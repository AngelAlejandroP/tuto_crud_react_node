import express from 'express'
import cors from 'cors'
//importar la conexion a la base de datos
import db from './database/db.js'
//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

//app initialization
const app = express();

//settings 
const puerto=8000

//middlewares
app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion con la base de datos exitosa')
} catch (error) {
    console.log(`El error es:${error}`)
}

//routes
app.get('/', (req, res) => {
    res.send('Hola mundo')
})


//start the server
app.listen(puerto, () => {
    console.log('Server on port: ', puerto)
    console.log('La ruta es http://localhost:8000/')
})

