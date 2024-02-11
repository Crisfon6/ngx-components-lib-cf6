import { Component } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';
@Component({
  selector: 'lib-swal-alerts',
  standalone: true,
  imports: [],
  template: `
  <button (click)="openAlert()"></button>
  `,
  styleUrl: './swal-alerts.component.css'
})
export class SwalAlertsComponent {
  openAlert(): Promise<SweetAlertResult<any>>{
    return Swal.fire('Any fool can use a computer');
  }
}
