import * as fs from 'fs'
export class ProductManager {
    constructor (path)
        {
       
            this.productId = 1;
            this.path = path;
        }
    
/* 
    addProduct = async (title, description, price, categoria, code, stock) => {
        if (!title || !description || !price || !categoria || !code || !stock) {
            console.error("Todos los campos del producto son obligatorios.");
            return;
        }
        const existingProduct = this.products.find((product) => product.code === code);
        if (existingProduct) {
            console.error("Ya existe un producto con el mismo código.");
            return;
        }
        const product = {
            id: this.productId++,
            title,
            description,
            price,
            categoria,
            code,
            stock,

        }
        this.products.push(product)

        const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    
        if (products.find(producto => producto.id == product.id)) {
            return console.log('producto ya agregado')
        }
    
        products.push(product)
        await fs.writeFile(this.path, JSON.stringify(products))
        
    } */

    async getProducts () {
        try {const data = await fs.readFile(this.path, "utf-8")

        if (!data) {
            console.error('Error al leer el archivo')
            return []
        } else {
            this.products = JSON.parse(data)
            console.log('Contenido del archivo:', this.products)
            return this.products
        }} catch (error) {
            console.error('Error al leer el archivo:', error);
            return [];
        }

    }

    getProductsById = async (id) => {
        this.products = JSON.parse(await fs.readFile(this.path, "utf-8"))
        return console.log(this.products.find((product) => product.id === id));
    }

    updateProduct = async (id, title) => { //recibe id y campo del producto
        this.products = JSON.parse(await fs.readFile(this.path, 'utf-8')) //lee los productos 
        const indice = this.products.findIndex (prod => prod.id === id) 
        console.log(indice)
        console.log(this.products[indice])
        //si es -1 no encontro
        if (indice!= -1){
            this.products[indice].title = title 
            await fs.writeFile(this.path, JSON.stringify(this.products))
        }else {
            console.log("producto no encontrado")
        }
    }

    deleteProduct = async (id) => {
        const products = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        //trae todos los productos q no sean el del id consultado
        const prods= products.filter(prod=> prod.id != id) 
        await fs.writeFile(this.path, JSON.stringify(prods))
    }
}