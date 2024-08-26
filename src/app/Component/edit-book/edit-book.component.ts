import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EditBookComponent implements OnInit {
  bookList: any[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBookList();
  }

  fetchBookList(): void {
    this.http.get<{ getList: any[] }>('https://localhost:7024/api/Book/GetBookList').subscribe((response) => {
      console.log(response.getList);
      if (response && response.getList) {
        this.bookList = response.getList; 
      }
    }, error => {
      console.error('Error fetching book list', error);
    });
  }
}
