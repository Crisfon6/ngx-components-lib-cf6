import { Component, EventEmitter, Output,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoundedButtonComponent } from '../public-api';
import { CommonModule } from '@angular/common';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'lib-code-editor',
  standalone: true,
  imports: [CommonModule,FormsModule,RoundedButtonComponent,ClipboardModule],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss'
})
export class CodeEditorComponent {
  @Output('code') codeOutput=new EventEmitter<string>();
  @Input({required:true}) language!:string;
  code:string = '';
  textBtn = 'Copiar';
  icon='content_paste';
  durationInSeconds = 3;
  writed(){
    this.codeOutput.emit(this.code);
  }


  constructor(private _snackBar: MatSnackBar) {}
  openSnackCopied(){
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });

  }
}
