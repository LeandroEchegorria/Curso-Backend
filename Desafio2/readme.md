
//Otra opcion para Desafio 1:

class Product{
    constructor(title, description , price , thumbnail ,code , stock) {
        this.title=title
        this.description=description
        this.price=price
        this.thumbnail=thumbnail
        this.code=code
        this.stock=stock
        this.id = Product.incrementarId()
    }
    //podes asignar el id como metodo de clase estatico (no lo pueden ejecutar los objetos)
    static incrementarId(){
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        } return this.idIncrement
    }
}

const product1 = new Product('arroz', 'rico', 1000, '', '123', 20)
const product2 = new Product('arroz', 'rico', 1000, '', '123', 20)

console.log(product1)
console.log(product2) */

//afterClass
//afterClass
//afterClass
//afterClass
//afterClass
//afterClass
//afterClass

/* 
import {promises as fs} from 'fs'

const addProduct = async (product) => {
    const products = JSON.parse(await fs.readFile('./productos.json', 'utf-8'))
    console.log(products)

    if (products.find(producto => producto.id == product.id)) {
        return console.log('producto ya agregado')
    }

    products.push(product)
    await fs.writeFile('./productos.json', JSON.stringify(products))

}

const updateProduct = async (id, {nombre}) => {
    const products = JSON.parse(await fs.readFile('./productos.json', 'utf-8'))
    const indice = products.findIndex (prod => prod.id === id)
    //si es -1 no encontro
    if (indice!= -1){
        products[indice].nombre = nombre 
        await fs.writeFile('./productos.json', JSON.stringify(products))
    }else {
        console.log("producto no encontrado")
    }
}

const deleteProduct = async (id) => {
    const products = JSON.parse(await fs.readFile('./productos.json', 'utf-8'))
    //trae todos los productos q no sean el del id consultado
    const prods= products.filter(prod=> prod.id != id) 
    await fs.writeFile('./productos.json', JSON.stringify(prods))
}


addProduct({"nombre": "arroz", id:1}, {"nombre": "fideos", id:2})
//updateProduct(3,{nombre:"espinaca"})
deleteProduct(0) 

