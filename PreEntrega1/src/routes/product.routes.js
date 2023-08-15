import { Router } from "express";
import { ProductManager } from "../controllers/productManager.js";

const productManager = new ProductManager ('src/models/product.json')
const routerProd = Router()

routerProd.get('/', async(req,res) => {
    const {limit} = req.query
    const prods = await productManager.getProducts()
    const products = prods.slice(0,limit)
    res.status(200).send(products)
})

routerProd.get('/:pid', async (req,res)=> {
    const {pid} = req.params
    const prod = await productManager.getProductsById(parseInt(pid))
    (prod) ? res.status(200).send(prod) : res.status(404).send("Product does not exist")
})

routerProd.post ('/', async (req,res) => {
    const confirmacion = await productManager.addProduct(req.body)
    
    (confirmacion) ? res.status(200).send("Product created") : res.status(400).send("Product already exists")
})

routerProd.put('/:pid', async (rea,res) => {
    const {pid} = req.params
    const confirmacion = await productManager.updateProduct(pid, req.body)
    (confirmacion) ? res.status(200).send("Product updated") : res.status(404).send("Product not found")

})

routerProd.delete('/:pid', async (req,res)=> {
    const {pid} = req.params
    const confirmacion = await productManager.deleteProduct(pid)
    (confirmacion) ? res.status(200).send("Product deleted") : res.status(404).send("Product not found")
})

export default routerProd

























/* 

//Ruta products:
routerProd.get("/api/products", (req, res) => {
    const products = fs.readFileSync("products.json", "utf-8")
    res.json(products)
})

routerProd.get("/api/products/:pid", (req, res) => {
    const product = fs.readFileSync(`products/${req.params.pid}.json`, "utf-8")
    res.json(product)
});

routerProd.post("/api/products", (req, res) => {
    const product = req.body
    // Autogenerate the product ID
    product.id = Math.random().toString(36).substring(7)
    fs.writeFileSync(`products/${product.id}.json`, JSON.stringify(product, null, 2))
    res.json(product)
});

routerProd.put("/api/products/:pid", (req, res) => {
    const product = req.body
    fs.writeFileSync(`products/${product.id}.json`, JSON.stringify(product, null, 2))
    res.json(product)
});

routerProd.delete("/api/products/:pid", (req, res) => {
    fs.unlinkSync(`products/${req.params.pid}.json`)
    res.json({ message: "Product deleted successfully" })
}) */