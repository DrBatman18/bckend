const fs = require('fs');

class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const existingProduct = this.products.find(
            (product) => product.code === code
        );
        if (existingProduct) {
            console.log("Este producto ya existe.");
        } else if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Ingrese los datos para cada uno de sus campos.");
        } else {    
            const newProduct = {
                id: this.productIdCounter++,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products.push(newProduct);
            this.saveProductsToFile(); // Guardar los productos en el archivo JSON
            console.log(`El producto "${newProduct.title}" ha sido agregado satisfactoriamente.`);
        }
    };

    // Resto de las funciones del ProductManager ...

    saveProductsToFile = () => {
        const data = JSON.stringify(this.products);
        fs.writeFile('products.json', data, (err) => {
            if (err) {
                console.log('Error al guardar los productos en el archivo JSON:', err);
            } else {
                console.log('Los productos han sido guardados en el archivo JSON.');
            }
        });
    };
}

const productManager = new ProductManager();

// Agregar algunos productos de ejemplo
productManager.addProduct(
    "producto prueba 1",
    "Este es un producto prueba 1",
    200,
    "Sin imagen",
    "abc123",
    25
);
productManager.addProduct(
    "producto prueba 2",
    "Este es un producto prueba 2",
    300,
    "Sin imagen",
    "xyz456",
    20
);

