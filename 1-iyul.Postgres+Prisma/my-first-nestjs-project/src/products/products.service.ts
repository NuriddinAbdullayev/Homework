import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService){}

  async getProductsByQuery(
    search?: string,
    minPrice?:string,
    maxPrice?:string,
    sort?:string,
  ) {
    return this.prisma.product.findMany({
      where: {
        title: {
          contains: search,
          mode: 'insensitive',
        },
        price: { 
          gte: minPrice ? Number(minPrice) : undefined,
          lte: maxPrice ? Number(maxPrice) : undefined, 
        }, 
      },    

      orderBy: {
        price: sort === "desc" ? "desc" : "asc",
      },
    });
  }

  async getProductsByQuery2(
    search?: string,
    minPrice?: string,
    page?: string,
    limit?: string,
  ) {
    const currentPage = Number(page) || 1;
    const take = Number(limit) || 5;
    const skip = (currentPage - 1) * take;
    
    const products = await this.prisma.product.findMany({
      where: {
        title: {
          endsWith: search,
          mode: "insensitive",
        },
      },
      skip,
      take,
    })
  }

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
