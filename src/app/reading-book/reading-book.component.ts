import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-reading-book',
  templateUrl: './reading-book.component.html',
  styleUrls: ['./reading-book.component.css']
})
export class ReadingBookComponent implements OnInit {
  books: any[];
  currentBook: any;
  form = new FormGroup({
    name: new FormControl()
  });

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(result => {
      this.books = result;
    });
  }

  save() {
    const name = this.form.get('name').value;
    this.bookService.save(name, false).subscribe(
      success => {
        alert('Thêm thành công!!');
        this.ngOnInit();
      },
      error => {
        alert('Thêm thất bại');
      }
    );
  }

  update(id) {
    this.bookService.getBook(id).subscribe(result => {
      this.currentBook = result;
      console.log(this.currentBook);
    });
    this.bookService.update(this.currentBook.id, this.currentBook.name, !this.currentBook.read).subscribe(
      success => {
        alert('Đã đọc thành công');
        this.ngOnInit();
      },
      error => {
        alert('Đã đọc thất bại');
      }
    );
  }

}
