import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookService } from '../providers/book.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [
    BookListComponent,
    BookDetailComponent
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent
  ],
  providers: [BookService]
})
export class BookModule { }
