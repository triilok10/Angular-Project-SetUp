import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService, Book } from '../../book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
  imports: [CommonModule]
})
export class DeleteBookComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBookList();
  }

  fetchBookList(): void {
    this.http.get<{ getList: any[] }>('https://localhost:7024/api/Book/GetBookList').subscribe(
      (response) => {
        console.log(response.getList);
        if (response && response.getList) {
          this.bookList = response.getList;
        }
      },
      (error) => {
        console.error('Error fetching book list', error);
      }
    );
  }


  deleteBooks(bookID: number): void {    
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBooks(bookID).subscribe({
        next: () => {
          alert('Book deleted successfully');
          this.fetchBookList();
        },
        error: (error) => {
          console.error('Error deleting book', error);
        }
      });
    }
  }
 
}
