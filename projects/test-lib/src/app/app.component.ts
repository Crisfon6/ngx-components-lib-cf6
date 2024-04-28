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
import { Card } from '../../../ngx-components-lib-cf6/src/lib/interfaces/card.interface';
import { CardComponent } from '../../../ngx-components-lib-cf6/src/lib/components/card/card.component';

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
    IconComponent,
    CardComponent
  ],
  providers: [AlertsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cardInfo: Card = {
    title: 'What is CSS Grid?',
    description:
      'CSS Grid is a layout system in CSS (Cascading Style Sheets) that allows web developers to create complex grid-based layouts with ease. It provides a two-dimensional grid-based layout system, with rows and columns, making it easier to design web pages without having to rely on floats and positioning.',
    color: '#3884ff',
  };
}
