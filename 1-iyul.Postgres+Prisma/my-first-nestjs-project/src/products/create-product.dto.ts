import { IsString, IsNotEmpty, Length, IsNumber, Min, Max } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: "Title must be string!" })
  @IsNotEmpty({ message: "Title cannot be left emty!" })
  @Length(3, 30, {
    message: "Title must be between 3 to 30 character"
  })
  title!: string;

  @IsNumber({}, { message: "Price must be number!" })
  @Min(1, { message: "Min price: 1" })
  @Max(1000000, { message: "Max price: 1000000" })
  price!: number;
}