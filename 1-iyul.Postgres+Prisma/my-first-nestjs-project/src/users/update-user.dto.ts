import { IsEmail, IsInt, IsNumberString, IsOptional, IsString, Length, Min, Max, MinLength } from "class-validator";

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  @Length(10, 100)
  email!: string;

  @IsOptional()
  @IsString()
  @Length(10, 100)
  @IsNumberString()
  name!: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  @MinLength(1)
  age!: number;

  @IsOptional()
  @MinLength(8, { message: "Password must be at least 6 character" })
  password!: string;
}