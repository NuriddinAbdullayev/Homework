import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      title: "Samsung S 24",
      price: 1000
    },
    {
      id: 2,
      title: "iPhone 16",
      price: 1200
    },
    {
      id: 3,
      title: "Xiomi note 14",
      price: 1000
    }
  ];

  getProducts() {
    return this.products;
  };

  getProduct(id:number) {
    return this.products.find((product) => product.id === id);
  };

  createProduct(product: any) {
    this.products.push(product);

    return {
      message: "Product created!",
      product
    }
  };

  updateProduct(id: number, body: any) {
    const product = this.products.find(product => product.id === id);

    if(!product) {
      return { message: "Product not found!" }
    }

    product.title = body.title;
    product.price = body.price;

    return {
      message: "Updated",
      product,
    }
  };

  deleteProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);

    this.products.splice(index, 1);

    return {
      message: "Deleted!"
    }
  }
}
