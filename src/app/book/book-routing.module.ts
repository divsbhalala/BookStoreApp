import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const BOOK_Routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: ':id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(BOOK_Routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
