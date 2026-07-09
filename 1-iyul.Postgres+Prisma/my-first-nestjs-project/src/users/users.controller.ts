import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateProductDto } from './update-user.dto';
import { CreateUserDto } from './create-user.dto';
import { RegisterDto } from './dto/resigter.dto';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body)
  }

  @Get(":id")
  getProduct(@Param("id") id: string) {
    return this.usersService.getUser(Number(id));
  }

  @Patch(":id")
  updateProduct(@Param("id") id: string, @Body() body: UpdateProductDto) {
    return this.usersService.updateUser(Number(id), body);
  }

  @Delete(":id")
  deleteProduct(@Param("id") id: string) {
    return this.usersService.deleteUser(Number(id));
  }

  @Post("register")
  register(
    @Body()
    body: RegisterDto,
  ) {
    return this.usersService.register(
      body,
    );
  }

  @Post('login')
  login(
    @Body()
    body: LoginDto,
  ){
    return this.usersService.login(
      body,
    );
  }
}