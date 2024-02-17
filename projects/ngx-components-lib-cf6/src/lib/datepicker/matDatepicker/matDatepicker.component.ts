import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'lib-mat-datepicker',
  standalone: true,
  imports: [
    MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe
  ],
  providers: [provideNativeDateAdapter(),provideAnimations()],
  template: `
<mat-form-field>
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]="picker">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>

  `,
  styleUrl: './matDatepicker.component.css'
})
export class MatDatepickerComponent {

 }
