import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-editor',
  templateUrl: './details-editor.component.html',
  styleUrls: ['./details-editor.component.scss']
})
export class DetailsEditorComponent {
  array: any[]= []

  birthday = new Date(); // April 15, 1988 -- since month
  detailForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    location: new FormControl('', [Validators.required])
 })
 
  onSubmit() {
    this.array.push(this.detailForm.value)
    console.log(this.array)
    this.detailForm.reset()
  }
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

 

}
