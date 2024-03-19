import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  AlertsService,
  CodeEditorComponent,
  CodeRenderComponent,
  MatDatepickerComponent,
  RoundedButtonComponent,
} from 'ngx-components-lib-cf6';
import { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import { IconComponent } from '../../../ngx-components-lib-cf6/src/lib/components/icon/icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatDatepickerComponent,
    RoundedButtonComponent,
    CodeEditorComponent,
    CodeRenderComponent,
    RouterLink,
    IconComponent
  ],
  providers: [AlertsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-lib';
  html = '';
  css = '';
  constructor(private alertService: AlertsService) {}
  topicsMenu: any[] = [
    {
      route: 'html',
      name: 'Html',
    },
    {
      route: 'css',
      name: 'Css',
    },
    {
      route: 'Css-Grid',
      name: 'Css Grid',
    },
    {
      route: 'flex-box',
      name: 'Flexbox',
    },
    {
      route: 'sass',
      name: 'sass',
    },
  ];
  openAlert() {
    const alertOptions: SweetAlertOptions = {
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    };

    this.alertService
      .openAlert(alertOptions)
      .then((result: SweetAlertResult) => {
        console.log(result);
      });
  }
  code(code: string, type: 'html' | 'css') {
    console.log(code);
    if (type === 'html') {
      this.html = code;
    } else {
      this.css = `<style>${code}</style>`;
    }
  }
}
