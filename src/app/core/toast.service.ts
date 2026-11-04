import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private sb = inject(MatSnackBar);
  show(msg: string) { this.sb.open(msg, undefined, { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'center' }); }
}
