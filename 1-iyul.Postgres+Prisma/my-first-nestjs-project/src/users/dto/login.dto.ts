import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsNotEmpty({ message: "Password is required!" })
  @MinLength(6, { message: "Password should be at least 6 character!" })
  password!: string;
}