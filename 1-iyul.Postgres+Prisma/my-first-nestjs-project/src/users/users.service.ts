import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './update-user.dto';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(body: CreateUserDto) {
    return this.prisma.user.create({
      data: body,
    });
  }

  async getUser(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    })
  } 

  async updateUser(id: number, body: UpdateProductDto) {
    return this.prisma.user.update({
      where: { id },
      data: body,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id }
    });
  }
}
