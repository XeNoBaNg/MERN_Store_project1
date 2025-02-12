import express from 'express'
import {PORT, mongoDBURL} from './config.js'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/', (req,res) => {
    return res.status(234).send('<h1>HELLO WORLD</h1>')
})

app.use('/books',userRoutes)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database.")
        app.listen(PORT, () => {
            console.log(`App is running on http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })