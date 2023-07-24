class ProductManager {
    constructor ()
        {
            this.products = [];
            this.productId = 1;
        }
    

    addProduct = (title, description, price, thumbnail, code, stock) => {
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
        
    }

    getProducts = () => {
        return this.products;
    }

    getProductsById = (id) => {
        return this.products.find((product) => product.id === id);
    }
}

const productManager = new ProductManager();

productManager.addProduct(
  "Laptop",
  "Potente laptop para tareas intensivas",
  1000,
  "laptop.jpg",
  "LP001",
  10
);
productManager.addProduct(
    "Laptop",
    "Potente laptop para tareas intensivas",
    1000,
    "laptop.jpg",
    "LP001",
    10
  );
productManager.addProduct(
  "Smartphone",
  "Teléfono inteligente con cámara de alta resolución",
  800,
  "smartphone.jpg",
  "SP002",
  20
);
productManager.addProduct(
  "Headphones",
  "Audífonos inalámbricos con cancelación de ruido",
  150,
  "headphones.jpg",
  "HP003",
  15
);


const foundProduct = productManager.getProductsById(4);
if (foundProduct) {
    console.log("El producto se encontró y es: ", foundProduct)
}
else console.error("No se encontro ese Id")


console.log(productManager.getProducts());
