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

  addBook(body: any): object {
    const books = this.bookRepository.create(body);
    return this.bookRepository.save(books);
  }
}
