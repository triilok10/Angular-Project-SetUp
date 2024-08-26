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
    console.log(this.http.get<Book[]>(`${this.apiURL}\GetBookList`))
    return this.http.get<Book[]>(`${this.apiURL}\GetBookList`);
  }

addBooks(books:Book):Observable<Book>{
return this.http.post<Book>(`${this.apiURL}\InsertBook`,books);
}

UpdateBooks():Observable<Book[]>{
  return this.http.get<Book[]>(`${this.apiURL}\InsertBook\{BooKId}`);
  }

  DeleteBooks():Observable<Book>{
    return this.http.delete<Book>(`${this.apiURL}\InsertBook\{bookID}`);
    }

}
