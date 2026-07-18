import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './update-product.dto';
// import { CreateProductDto } from './create-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProductsByQuery(
    @Query('search')
    search?: string,
    @Query("minPrice")
    minPrice?:string,
    @Query("maxPrice")
    maxPrice?:string,
    @Query("sort")
    sort?:string,
  ) {
    return this.productsService.getProductsByQuery(
      search,
      minPrice,
    )
  }

  @Get()
  getProductsByQuery2(
    @Query('search')
    search?: string,
    @Query("minPrice")
    minPrice?:string,
    @Query("page")
    page?:string,
    @Query("limit")
    limit?:string,
  ) {
    return this.productsService.getProductsByQuery2(
      search,
      minPrice,
    )
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  // upload with image
  @Post()
    @UseInterceptors(
      FileInterceptor(
        "image",
        {
          storage: diskStorage({
            destination: "./uploads",
            filename: (req, file, cb) => {
              const uniqueName = Date.now() + extname(file.originalname);
              cb(
                null, 
                uniqueName,
              )
            }
          })
        }
      )
    )
    createProduct(
      @UploadedFile()
      file: Express.Multer.File,
      @Body()
      body: any,
    ) {
      return this.productsService.createProduct(
        body, 
        file.filename,
      );
    }

  @Get(":id")
  getProduct(@Param("id") id: string) {
    return this.productsService.getProduct(Number(id));
  }

  @Patch(":id")
  updateProduct(@Param("id") id: string, @Body() body: UpdateProductDto) {
    return this.productsService.updateProduct(Number(id), body);
  }

  @Delete(":id")
  deleteProduct(@Param("id") id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
