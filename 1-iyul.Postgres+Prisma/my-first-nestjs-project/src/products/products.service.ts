import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService){}

  async getProducts() {
    const products = await this.prisma.product.findMany();

    return products.map((product) => ({
      ...product,
      image: product.image
        ? `http://localhost:3000/uploads/${product.image}`
        : null,
    }));
  }

  async createProduct(body: CreateProductDto, image: string) {
    return this.prisma.product.create({
      data: {
        title: body.title,
        price: Number(body.price),
        image
      }
    });
  }

  async getProduct(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    })
  } 

  async updateProduct(id: number, body: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: body,
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.product.delete({
      where: { id }
    });
  }
}
