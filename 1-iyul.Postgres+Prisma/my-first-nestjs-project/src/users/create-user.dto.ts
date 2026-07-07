import { IsEmail, IsInt, IsNotEmpty, IsNumberString, IsString, Length, Max, Min, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @Length(10, 100)
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 100)
  name!: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(100)
  age!: number;

  @MinLength(8, { message: "Password must be at least 6 character" })
  password!: string;
}