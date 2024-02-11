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
  <mat-label>Enter a date range</mat-label>
  <mat-date-range-input [formGroup]="range" [rangePicker]="picker">
    <input matStartDate formControlName="start" placeholder="Start date">
    <input matEndDate formControlName="end" placeholder="End date">
  </mat-date-range-input>
  <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-date-range-picker #picker></mat-date-range-picker>

  @if (range.controls.start.hasError('matStartDateInvalid')) {
    <mat-error>Invalid start date</mat-error>
  }
  @if (range.controls.end.hasError('matEndDateInvalid')) {
    <mat-error>Invalid end date</mat-error>
  }
</mat-form-field>

<p>Selected range: {{range.value | json}}</p>
  `,
  styleUrl: './matDatepicker.component.css'
})
export class MatDatepickerComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
 }
