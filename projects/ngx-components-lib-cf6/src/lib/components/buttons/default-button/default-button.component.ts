import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-default-button',
  standalone: false,
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.css'
})
export class DefaultButtonComponent {
  @Input() buttonText :string= 'Click me!';
  @Input() class= "btn btn-primary";
}
