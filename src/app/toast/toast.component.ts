import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-toast-component',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  constructor(
    public dialogRef: MatDialogRef<ToastComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
