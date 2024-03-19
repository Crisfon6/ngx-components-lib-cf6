import { Component, Input } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-rounded-button',
  standalone: true,
  imports: [IconComponent,CommonModule],
  templateUrl: './rounded-button.component.html',
  styleUrl: './rounded-button.component.scss'
})
export class RoundedButtonComponent {
  @Input() text  = '';
  @Input() color = 'white';
  @Input() background = 'blue';
  @Input() hoverEffect = true;
  @Input('style') inputStyle!:Record<string,string>;
  @Input() icon!:string;
  @Input() iconPosition: 'right' | 'left' = 'left';
  style!:Record<string,string>;

  multiClass!: Record<string,boolean>;

  constructor(){
   this.setupCssClass();
   this.setupStyle();
  }
  setupCssClass(){
    this.multiClass = { 'btn-hover':this.hoverEffect};
  }
  setupStyle(){
    this.style = this.inputStyle;
  }
}
