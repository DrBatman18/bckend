    //Constructor de array de productos
class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
    
    // Ingreso de los productos
    addProduct = (title, description, price, thumbnail, code, stock) => {
      const existingProduct = this.products.find(
        (product) => product.code === code
      );
      existingProduct
        ? console.log("ESTE PRODUCTO YA EXISTE")
        : !title || !description || !price || !thumbnail || !code || !stock
        ? console.log("INGRESE LOS DATOS PARA CADA UNO DE SUS CAMPOS")
        : this.products.push({
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
          });
    };
    
    //Llamada a productos
    getProducts = () => this.products;
    
    //Llamada al error si tiene el mismo id, se detiene ("NO FUNCIONA")
    getProductById = (id) => {
      const product = this.products.find((product) => product.id === id);
      console.log(product ? product : "NO FUNCIONA");
    };
  }
  
  // Productos
  const productManager = new ProductManager();
  
  productManager.addProduct(
    "Producto 1",
    "Descripcion del producto 1",
    100,
    "img1.png",
    "SKU001",
    100
  );
  productManager.addProduct(
    "Productp 2",
    "Descripcion del producto 2",
    200,
    "img2.png",
    "SKU002",
    150
  );
  productManager.addProduct(
    "Producto 3",
    "Descripcion del producto 3",
    300,
    "img3.png",
    "SKU003",
    100
  );
  
  console.log(productManager.getProducts());
  
  productManager.getProductById(2);
  
  productManager.getProductById(4); // NO FUNCIONA
  