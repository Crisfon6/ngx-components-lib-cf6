import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Card } from '../../interfaces/card.interface';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({
    required:true
  })cardInfo!:Card;

  @Input({
    required:false
  })titleFontSize:string = "40px";
  @Input({
    required:false
  })descriptionFontSize:string = "20px";
}
