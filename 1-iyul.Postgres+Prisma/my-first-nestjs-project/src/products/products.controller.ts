import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './update-product.dto';
import { CreateProductDto } from './create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productsService.createProduct(body);
  }

  @Get(":id")
  getProduct(@Param("id") id: string) {
    return this.productsService.getProduct(Number(id));
  }

  @Patch(":id")
  updateProduct(@Param("id") id: string, @Body() body: UpdateProductDto) {
    return this.productsService.updateProduct(Number(id), body);
  }

  @Delete(":id")
  deleteProduct(@Param("id") id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
