import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlertsService, ButtonsModule, MatDatepickerComponent,} from 'ngx-components-lib-cf6';
import { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonsModule,MatDatepickerComponent,],
  providers: [AlertsService,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 constructor(private alertService:AlertsService){
 }
  title = 'test-lib';
  openAlert(){
    const alertOptions: SweetAlertOptions = {
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
     };

    this.alertService.openAlert(alertOptions).then((result:SweetAlertResult) => {
      console.log(result);
    });


  }
}
