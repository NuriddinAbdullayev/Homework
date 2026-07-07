import { IsEmail, IsInt, IsNotEmpty, IsString, Length, MinLength } from "class-validator";

export class RegisterDto {
  @IsString({ message: "Name must be string!" })
  @Length(3, 50, { message: "Name must be shorter!" })
  name!: string;

  @IsEmail()
  email!: string;

  @IsInt({ message: "Number must be integer!" })
  age!: number;

  @IsNotEmpty({ message: "Password is required!" })
  @MinLength(8, { message: "Password must be at least 6 character" })
  password!: string;
}