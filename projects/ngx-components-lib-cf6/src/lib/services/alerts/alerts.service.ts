import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }
  openAlert(alertOptions:SweetAlertOptions):Promise<SweetAlertResult<any>>{
    return Swal.fire(alertOptions);
  }
}
