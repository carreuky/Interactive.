import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
@Input() book: Book = {} as Book
@Output() emitBook = new EventEmitter<Book>()
inList: boolean = false

constructor(private cartService: CartService){}

addToCart(){
  this.inList = true
  this.cartService.add(this.book)
}
removeFromCart (){
  this.inList = false
  this.cartService.remove(this.book)
}


}
