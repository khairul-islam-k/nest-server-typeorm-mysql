import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('gether')
  getBook() {
    return this.booksService.getBook();
  }

  @Post('addBook')
  addBook(@Body() body: any): object {
    return this.booksService.addBook(body);
  }
}
