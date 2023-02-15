import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-editor',
  templateUrl: './details-editor.component.html',
  styleUrls: ['./details-editor.component.scss']
})
export class DetailsEditorComponent {
  array: any[]= []
  detailForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    location: new FormControl('', [Validators.required])
 })

 
  onSubmit() {
    this.array.push(this.detailForm.value)
    console.log(this.array)
    this.detailForm.reset()
  }

 

}
