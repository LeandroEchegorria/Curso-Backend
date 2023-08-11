import express from 'express'
import { ProductManager } from './ProductManager.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true})) 
const PORT = 4008

app.listen(PORT, ()=> {
    console.log(`Server express on port ${PORT}. http://localhost:${PORT}/`)
})
const productManager = new ProductManager("./src/productos.json")

app.get('/', (req, res) => {
    res.send("Bienvenido al desafio 3")
})

app.get('/productos', async (req, res) => {
    const {limit} = req.query
    const products = await productManager.getProducts()
    if (!limit) {
        res.send(products);
      } else {
        res.send(products.slice(0, limit));
      }
})


app.get('/productos/:id', async (req,res) => {
    try{    
        const prod = await productManager.getProductsById(parseInt(req.params.id))
        if (prod) {
            res.status(200).send(prod)
        } else {
            res.status(404).send("Producto no encontrado")
        }
    } catch (error) {
        res.status(500).send("Error al obtener el producto");
    }
}) 


app.get('*', (req,res)=> {
    res.send("Error 404")
})

app.get('/productos', (req,res) => {
    // console.log(req.query) //consultas como si fuese un objeto
    const {categoria} = req.query
    console.log(categoria)
    const prods = productos.filter(prod => prod.categoria === categoria)
    res.send(prods)
}) 
