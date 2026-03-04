import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Get('gether')
  getBook() {
    return this.booksService.getBook();
  }

  @Patch('updateBook/:id')
  bookUpdate(@Param('id') id: string, @Body() body: any) {
    return this.booksService.bookUpdate(id, body);
  }

  @Delete('deleteBook/:id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }

  @Post('addBook')
  addBook(@Body() body: any): object {
    return this.booksService.addBook(body);
  }
}
