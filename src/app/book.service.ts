import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  bookID: number; 
  bookName: string;
  bookAuthorName: string;
  bookMedium: string;
  bookPublishedYear: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiURL = "https://localhost:7024/api/Book";

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiURL}/GetBookList`);
  }

  addBooks(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiURL}/InsertBook`, book);
  }

  
  updateBookIdGet(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/UpdateBook/${bookId}`);
  }

  updateBooks(bookId: number): Observable<Book> {
    return this.http.put<Book>(`${this.apiURL}/UpdateBook/${bookId}`,bookId);
  }
  deleteBooks(bookID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/DeleteBook/${bookID}`);
  }
  
}
