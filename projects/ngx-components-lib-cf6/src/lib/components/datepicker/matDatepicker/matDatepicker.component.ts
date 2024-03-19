import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'lib-mat-datepicker',
  standalone: true,
  imports: [

  ],
  providers: [provideNativeDateAdapter(),provideAnimations(),MatFormFieldModule, MatInputModule, MatDatepickerModule],
  template: `


  `,
  styleUrl: './matDatepicker.component.scss'
})
export class MatDatepickerComponent {

 }
