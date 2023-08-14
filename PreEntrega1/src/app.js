import express from 'express';

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded ({extended: true}))

const PORT = 8080
app.listen(PORT, ()=> {
    console.log(`Server on port ${PORT}, http://localhost:${PORT}/`)
})

app.get('/', (req,res)=>{
    res.send("PREENTREGA 1")
})

//Ruta products:
app.get('/products', (req,res)=> {
    res.send("grupo de ruta products, todos los productos de la base con el limit")
})
app.get('/products/:id', (req,res)=> {
    res.send("grupo de ruta products, un solo producto")
})



//Ruta carts:
app.get('/carts', (req,res)=>{
    res.send("grupo de ruta carts")
})

/* 


// Ruta raíz POST 
app.post('/', async (req, res) => {
 
  // Validar datos
  const productData = req.body;
  if (!productData.title) {
    res.status(400).send('El campo title es obligatorio');
    return;
  }
  if (!productData.description) {
    res.status(400).send('El campo description es obligatorio');
    return;
  }
  if (!productData.code) {
    res.status(400).send('El campo code es obligatorio');
    return;
  }
  if (!productData.price) {
    res.status(400).send('El campo price es obligatorio');
    return;
  }
  if (!productData.stock) {
    res.status(400).send('El campo stock es obligatorio');
    return;
  }
  if (!productData.category) {
    res.status(400).send('El campo category es obligatorio');
    return;
  }

  // Crear un nuevo producto
  const product = {
    title: productData.title,
    description: productData.description,
    code: productData.code,
    price: productData.price,
    status: true,
    stock: productData.stock,
    category: productData.category
  };

  // Guardar el producto en el archivo JSON
  try {
    const productsFile = fs.readFileSync('products.json', 'utf8');
    const products = JSON.parse(productsFile);
    products.push(product);
    fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
}); */