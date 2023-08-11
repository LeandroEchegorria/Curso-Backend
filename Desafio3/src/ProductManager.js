import * as fs from 'fs'
export class ProductManager {
    constructor (path)
        {
       
            this.productId = 1;
            this.path = path;
        }
    

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
        
    } 

    async getProducts () {
        const prod = await fs.promises.readFile(this.path, "utf-8")
        return prod


    


    } 
 
    async getProductsById (id) {
        let products = JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
        const prodFound = products.find((product) => product.id === id)
        return prodFound
    } 

    
    async updateProduct (id, title) { //recibe id y campo del producto
        let products = JSON.parse(await fs.promises.readFile(this.path, 'utf-8')) 
        const indice = products.findIndex (prod => prod.id === id) 
        console.log(indice)
        console.log(products[indice])
        //si es -1 no encontro
        if (indice!= -1){
            products[indice].title = title 
            products[indice].description = description
            products[indice].price = price
            products[indice].thumbnail = thumbnail
            products[indice].code = code
            products[indice].stock = stock
            await fs.promises.writeFile(this.path, JSON.stringify(products))
        }else {
            console.log("producto no encontrado")
        }
    }

    async deleteProduct (id) {
        const products = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'))
        //trae todos los productos q no sean el del id consultado
        const prods= products.filter(prod=> prod.id != id) 
        await fs.promises.writeFile(this.path, JSON.stringify(prods))
    }
}