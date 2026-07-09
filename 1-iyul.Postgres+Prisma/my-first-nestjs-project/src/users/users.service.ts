import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './update-user.dto';
import { CreateUserDto } from './create-user.dto';
import { RegisterDto } from './dto/resigter.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}

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

  async register(body: RegisterDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        email: String(body.email),
      }
    });

    if(existingUser) {
      throw new BadRequestException(
        "This Email already exist!"
      );
    }

    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    return this.prisma.user.create({
      data: {
        name: String(body.name),
        email: String(body.email),
        password: hashedPassword,
        age: body.age
      }
    });
  }

  async login(body: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new BadRequestException(
        'User not found',
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      body.password,
      user.password,
    );

    if (!isPasswordCorrect) {
        throw new BadRequestException(
          'Incorrect password',
        );
    }

    const token = this.authService.generateToken({
      id: user.id,

      email: user.email
    });

    const { password, ...userWithoutPassword } = user;

    return {
      message: 'Login successful',
      
      access_token: token,
      
      user: userWithoutPassword,
    };    
  }
}
