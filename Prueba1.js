class Product {
    constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    }
}

class ProductList {
    constructor() {
    this.products = [];
    this.lastId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('Error: Todos los campos son obligatorios');
        return;
    }

      // Validar que no se repita el campo "code"
    const existingProduct = this.products.find((product) => product.code === code);
    if (existingProduct) {
        console.log(`Error: El código ${code} ya está en uso`);
        return;
    }

    const newProduct = new Product(title, description, price, thumbnail, code, stock);
    this.lastId++;
    newProduct.id = this.lastId;
    this.products.push(newProduct);
    }

    getProducts() {
    return this.products;
    }

    getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
        console.log(`Error: Producto con id ${id} no encontrado`);
    }
    return product;
    }
}

  // Ejemplo de uso
const productList = new ProductList();
productList.addProduct('Producto 1', 'Descripción del producto 1', 10.99, 'img/producto1.jpg', 'PRD-001', 5);
productList.addProduct('Producto 2', 'Descripción del producto 2', 20.99, 'img/producto2.jpg', 'PRD-002', 10);
productList.addProduct('Producto 3', 'Descripción del producto 3', 30.99, 'img/producto3.jpg', 'PRD-003', 15);

console.log(productList.getProducts());

const product = productList.getProductById(2);
console.log(product);

const nonExistingProduct = productList.getProductById(4);
