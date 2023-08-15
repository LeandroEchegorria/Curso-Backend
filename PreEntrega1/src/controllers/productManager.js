import { promises as fs } from 'fs'

export class ProductManager {
    constructor(path) {
        this.products = []
        this.path = path
    }

    static incrementarID() {
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }

    async getProducts() {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        return prods
    }

    async addProduct(prod) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        if (!prod.title || !prod.description || !prod.price || !prod.category || !prod.code || !prod.stock) {
            console.error('Error. All product fields are mandatory');
            return;
        }
        const existProd = prods.find(producto => producto.code === prod.code)
        if (existProd) {
            return false
        } else {
            prod.id = ProductManager.incrementarID()
            prod.status = true
            prods.push(producto)
            await fs.writeFile(this.path, JSON.stringify(prods))
            return true
        }
    }
    async updateProduct (id, title) { 
        let products = JSON.parse(await fs.readFile(this.path, 'utf-8')) 
        const indice = products.findIndex (prod => prod.id === id) 

        if (indice!= -1){
            products[indice].title = title 
            products[indice].description = description
            products[indice].price = price
            products[indice].thumbnail = thumbnail
            products[indice].code = code
            products[indice].stock = stock
            await fs.writeFile(this.path, JSON.stringify(products))
        }else {
            console.log("Product not found")
        }
    }

    async deleteProduct (id) {
        const products = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'))
        const buscado = products.find(item => item.id === parseInt(id));
        
        if (buscado) {
            const prods= products.filter(prod=> prod.id != id) 
            await fs.promises.writeFile(this.path, JSON.stringify(prods))
            return true  
        } else {
            return false
        }
    }
}