import { Component, OnInit } from '@angular/core';
import { BookService } from '../../providers/book.service';
import { Book } from '../../models/book';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  chunkOfBook: Array<Book[]>;
  noOfBooks: Number;
  page: Number = 0;
  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      books = _.sortBy(books, ['name']);
      this.chunkOfBook = _.chunk(books, 5);
      this.books = this.chunkOfBook[0];
      this.noOfBooks = books.length;
    });
  }

  bookPageChanged(event) {
    if (!this.chunkOfBook) { return ; }
    this.books = this.chunkOfBook[Number.parseInt(event) - 1];
  }

  openBookDetail(id) {
    this.router.navigate(['/books', id]);
  }

}
