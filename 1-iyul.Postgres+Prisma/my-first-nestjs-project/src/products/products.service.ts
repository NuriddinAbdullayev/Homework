import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService){}

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async createProduct(body: any) {
    return this.prisma.product.create({
      data: body,
    });
  }
}
