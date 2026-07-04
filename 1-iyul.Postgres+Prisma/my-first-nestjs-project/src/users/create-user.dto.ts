import { IsEmail, IsInt, IsNotEmpty, IsNumberString, IsString, Length, Max, Min } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @Length(10, 100)
  @IsNotEmpty()
  @IsNumberString()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  @Length(10, 100)
  name!: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(100)
  age!: number;
}