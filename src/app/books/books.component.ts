import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  
  lis: any =[]
  books=[];

  
  constructor(private bookService:BooksService){}

   ngOnInit(): void {
     this.bookService.getBooks().subscribe(res=>{
      this.lis=res;
      this.books=this.lis.list
      console.log(this.books)
     })
   }

   


}
