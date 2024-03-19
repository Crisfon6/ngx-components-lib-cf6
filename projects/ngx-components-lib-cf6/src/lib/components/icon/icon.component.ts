import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'lib-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input({required: true}) fontIcon !:string;
}
