import http from 'http'

const PORT = 5000
const server = http.createServer((req, res) => {
    res.end("Mi primer servidor  back")
})

server.listen(PORT, ()=> {
    console.log(`Server on port ${PORT} `)
})