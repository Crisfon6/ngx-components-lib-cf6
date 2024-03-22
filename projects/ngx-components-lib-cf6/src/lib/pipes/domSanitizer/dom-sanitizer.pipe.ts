import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer',
  standalone: true
})
export class DomSanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  transform(value:string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
