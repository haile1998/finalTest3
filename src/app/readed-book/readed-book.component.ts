import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readed-book',
  templateUrl: './readed-book.component.html',
  styleUrls: ['./readed-book.component.css']
})
export class ReadedBookComponent implements OnInit {
  books: any[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(result => { this.books = result; });
  }

  update(book: any) {
    console.log(book);
    this.bookService.update(book.id, book.name, 'false').subscribe(
      success => {
        alert('Đọc lại thành công');
        this.ngOnInit();
      },
      error => {
        alert('Đọc lại thất bại');
      }
    );
  }

}
