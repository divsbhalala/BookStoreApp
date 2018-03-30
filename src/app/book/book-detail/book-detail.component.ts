import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../providers/book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  loading: Boolean = true;
  editBook: Book;
  isEdit: Boolean = false;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (res) => {
       this.bookService.getBook(res.id).subscribe( (book) => {
        this.book = book;
        this.editBook = Object.assign({}, book);
        this.loading = false;
       });
    });
  }

  editBooks() {
    this.isEdit = true;
  }

  cancelEdit() {
     this.isEdit = false;
  }

  onSubmit() {
    this.bookService.updateBook(this.editBook).subscribe((res) => {
      this.location.back();
    });
  }

}
