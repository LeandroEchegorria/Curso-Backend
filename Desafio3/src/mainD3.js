/* import http from 'http'

const PORT = 5000
const server = http.createServer((req, res) => {
    res.end("Mi primer servidor  back")
})

server.listen(PORT, ()=> {
    console.log(`Server on port ${PORT} `)
}) */


import express from 'express'

const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.send("Hola desde la pag de inicio de la app ssss")
})

app.listen(PORT, ()=> {
    console.log(`Server express on port ${PORT}`)
})