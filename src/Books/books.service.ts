import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async getBook() {
    return await this.bookRepository.find();
  }

  async bookUpdate(id: string, body: any) {
    return await this.bookRepository.update(
      { id: +id },
      body
    );
  }

  addBook(body: any): object {
    const books = this.bookRepository.create(body);
    return this.bookRepository.save(books);
  }

  async deleteBook(id: string) {
    console.log(+id);
    return await this.bookRepository.softDelete({id: +id});
  }

  async permanentDelete(id: string) {
    return await this.bookRepository.delete(+id);
  }
}
