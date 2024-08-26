import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BookService, Book } from '../../book.service'; 

@Component({
  selector: 'app-insert-book',
  standalone: true,
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class InsertBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      bookName: ['', Validators.required],
      bookAuthorName: ['', Validators.required],
      bookMedium: ['', Validators.required],
      bookPublishedYear: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: Book = this.bookForm.value;
      this.bookService.addBooks(newBook).subscribe({
        next: (response) => {
          console.log('Book added successfully', response);
          this.bookForm.reset(); 
        },
        error: (error) => {
          console.error('Error adding book', error);
        }
      });
    }
  }
}
