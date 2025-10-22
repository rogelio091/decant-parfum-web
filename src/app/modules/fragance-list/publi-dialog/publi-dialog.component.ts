import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogLayoutComponent } from 'app/components/dialog-layout/dialog-layout.component';
import { DialogData } from 'app/core/models/dialog.type';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-publi-dialog',
  imports: [CommonModule, DialogLayoutComponent, MatButtonModule, MatDialogModule, MatIconModule],
  standalone: true,
  templateUrl: './publi-dialog.component.html',
  styleUrl: './publi-dialog.component.scss'
})
export class PubliDialogComponent {
  images_path = environment.IMAGES_URL + 'probar2.webp';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<PubliDialogComponent>
  ) {}
}
