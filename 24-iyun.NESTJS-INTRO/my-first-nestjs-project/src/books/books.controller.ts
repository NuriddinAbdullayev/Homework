import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
    getBooks() {
      return this.booksService.getBooks();
    }

  @Get(':id')
    getBook(@Param('id') id: string) {
      return this.booksService.getBook(Number(id));
    } 

  @Post()
    createBook(@Body() body: any) {
      return this.booksService.createBook(body);
    }
}