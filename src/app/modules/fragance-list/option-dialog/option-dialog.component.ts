import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Inject, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogLayoutComponent } from 'app/components/dialog-layout/dialog-layout.component';
import { DialogData } from 'app/core/models/dialog.type';
import { ItemOptions, ItemStatus } from 'app/core/models/item.type';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-option-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogLayoutComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgOptimizedImage
  ],
  templateUrl: './option-dialog.component.html'
})
export class OptionDialogComponent {
  isMobile = signal<boolean>(window.innerWidth < 960);
  selectedOption = signal<ItemOptions>(undefined);
  itemStatus = ItemStatus;

  image_path = environment.IMAGES_URL;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<OptionDialogComponent>
  ) {}

  selectOption(option: ItemOptions): void {
    this.selectedOption.set(option);
  }

  isSelected(option: ItemOptions): boolean {
    return this.selectedOption()?.name === option.name;
  }

  addToCart(): void {
    this.dialogRef.close(this.selectedOption());
  }
}
