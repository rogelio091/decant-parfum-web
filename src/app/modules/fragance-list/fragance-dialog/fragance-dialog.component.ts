import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogLayoutComponent } from 'app/components/dialog-layout/dialog-layout.component';
import { DialogData } from 'app/core/models/dialog.type';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-fragance-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogLayoutComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgOptimizedImage
  ],
  templateUrl: './fragance-dialog.component.html',
  styleUrl: './fragance-dialog.component.scss'
})
export class FraganceDialogComponent implements OnInit {
  isMobile = signal<boolean>(window.innerWidth < 960);

  images_path = environment.IMAGES_URL;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<FraganceDialogComponent>
  ) {}

  ngOnInit(): void {}

  addToCart(): void {
    this.dialogRef.close(true);
  }
}
