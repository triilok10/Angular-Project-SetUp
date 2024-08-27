import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EditBookComponent implements OnInit {
  bookList: any[] = [];
  selectedBook: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBookList();

  }
  fetchBookList(): void {
    this.http.get<{ getList: any[] }>('https://localhost:7024/api/Book/GetBookList').subscribe((response) => {
      if (response && response.getList) {
        this.bookList = response.getList;
      }
    }, error => {
      console.error('Error fetching book list', error);
    });
  }
  getBook(bookID: number): void {
    console.log(`Making API call to getBook with ID: ${bookID}`);
debugger;
    this.http.get<{ getBook: any }>(`https://localhost:7024/api/Book/GetBook?bookId=${bookID}`)
      .subscribe((response) => {
        debugger;
        console.log("Data", response);
        if (response && response.getBook) {
          this.bookList = response.getBook;
        }
      }, error => {
        console.error('Error fetching book list', error);
      });
  }
}
