import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-editor',
  templateUrl: './details-editor.component.html',
  styleUrls: ['./details-editor.component.scss']
})
export class DetailsEditorComponent {
  detailForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')

  })

  onSubmit() {
    console.log(this.detailForm.value)
  }

}
