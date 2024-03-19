import { Component, ElementRef, Input,  Pipe,  ViewChild } from '@angular/core';
import { DomSanitizerPipe } from '../../pipes/public-api';


@Component({
  selector: 'lib-code-render',
  standalone: true,
  imports: [DomSanitizerPipe],
  templateUrl: './code-render.component.html',
  styleUrl: './code-render.component.scss',
})
export class CodeRenderComponent  {
  @Input() html = '';
  @ViewChild('userHtmlContainer') userHtmlContainer!: ElementRef;
  constructor() {}
}
