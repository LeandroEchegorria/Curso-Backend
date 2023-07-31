import {promises as fs} from 'fs'
class ProductManager {
    constructor ()
        {
            this.products = [];
            this.productId = 1;
            this.path = './';
        }
    

    addProduct = async (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
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
            thumbnail,
            code,
            stock,

        }
        this.products.push(product)

        const products = JSON.parse(await fs.readFile('./productos.json', 'utf-8'))
    
        if (products.find(producto => producto.id == product.id)) {
            return console.log('producto ya agregado')
        }
    
        products.push(product)
        await fs.writeFile('./productos.json', JSON.stringify(products))
        
    }

    getProducts = async () => {
            const data = await fs.readFile('./productos.json', 'utf8')

        if (!data) {
            console.error('Error al leer el archivo')
            return []
        } else {
            this.products = JSON.parse(data)
            console.log('Contenido del archivo:', this.products)
            return this.products
        }
    }

    getProductsById = async (id) => {
        this.products = JSON.parse(await fs.readFile('./productos.json', 'utf-8'))
        return console.log(this.products.find((product) => product.id === id));
    }

    updateProduct = async (id, title) => { //recibe id y campo del producto
        this.products = JSON.parse(await fs.readFile('./productos.json', 'utf-8')) //lee los productos 
        const indice = this.products.findIndex (prod => prod.id === id) 
        console.log(indice)
        console.log(this.products[indice])
        //si es -1 no encontro
        if (indice!= -1){
            this.products[indice].title = title 
            await fs.writeFile('./productos.json', JSON.stringify(this.products))
        }else {
            console.log("producto no encontrado")
        }
    }

    deleteProduct = async (id) => {
        const products = JSON.parse(await fs.readFile('./productos.json', 'utf-8'))
        //trae todos los productos q no sean el del id consultado
        const prods= products.filter(prod=> prod.id != id) 
        await fs.writeFile('./productos.json', JSON.stringify(prods))
    }
}

const productManager = new ProductManager();


productManager.addProduct("arroz", "arroz gallo en tu cocina", 650, "./arroz.jpg", "PR082", 17) 
console.log("ejecutada agregar producto 1")
setTimeout(() => {
    productManager.addProduct("fideos", "arroz gallo en tu cocina", 1000, "./fideos.jpg", "PR003", 150)
    console.log("ejecutada agregar producto 2")
}, 1000);

setTimeout(() => {
    productManager.addProduct("tomate", "en lata", 850, "./tomate.jpg", "PR100", 20) 
    console.log("ejecutada agregar producto 3")
}, 2000);
setTimeout(() => {
    productManager.getProducts()
    console.log("get products")
}, 3000);
setTimeout(() => {
    console.log("En unos seg se borrara algun dato")
}, 7000);
setTimeout(() => {
    productManager.deleteProduct(1)
}, 7500);
setTimeout(() => {
    productManager.getProducts()
}, 10000);

setTimeout(() => {
    productManager.updateProduct(2,"Leandro")
}, 12000)
setTimeout(() => {
    productManager.getProducts()
}, 14000)

//productManager.getProductsById(2)
