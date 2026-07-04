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
}