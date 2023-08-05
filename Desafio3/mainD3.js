import http from 'http'

const PORT = 5000
const server = http.createServer((req, res) => {
    res.end("Mi primer servidor desde back")
})

server.listen(PORT, ()=> {
    console.log(`Escuchando desde el puerto ${PORT} `)
})