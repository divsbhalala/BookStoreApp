import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from '../models/book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

  private BookUrl = 'api/books';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET books from the server */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BookUrl).pipe(
        tap(books => this.log(`fetched books`)),
        catchError(this.handleError('getBooks', []))
      );
  }

  /**
   * GET book by id. Will 404 if id not found
   * @param id id of specific book
   */
  getBook(id: number): Observable<Book> {
    const url = `${this.BookUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_ => this.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
      );
  }

  /**
   * PUT: update the book on the server
   * @param book book detail
   */
  updateBook(book: Book): Observable<any> {
    return this.http.put(this.BookUrl, book, httpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  }

}
