import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import{ MatSnackBarRef,
} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'lib-snackbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  text="Copiado";
  textBtn = "Ok";
  snackBarRef = inject(MatSnackBarRef);
}
