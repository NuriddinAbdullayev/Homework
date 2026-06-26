import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class BooksService {
  private books = [
    {
      id: 1,
      title: "Atomic Habits",
      pages: 320
    },
    {
      id: 2,
      title: "Deep Work",
      pages: 280
    }
  ];

  getBooks() {
    return this.books;
  };

  getBook(id:number) {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      throw new NotFoundException(`Book with this ${id} does not exist!`);
    }

    return book;
  };

  createBook(book: any) {
    this.books.push(book);

    return {
      message: "Book created!",
      book
    }
  }
}
