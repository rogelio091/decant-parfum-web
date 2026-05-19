import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'environments/environment';

export type SetPreviewData = {
  getSelections: () => Array<{ itemId: number; house: string; itemName: string; image: string }>;
  getTotalPrice: () => number;
  getIsComplete: () => boolean;
  onRemove: (index: number) => void;
};

@Component({
  selector: 'app-set-preview-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="flex flex-col p-4 sm:p-6 gap-3 max-h-[80vh] overflow-y-auto overflow-x-hidden">
      <!-- Close button -->
      <div class="flex items-center justify-end -mr-1 -mt-1">
        <button mat-icon-button class="icon-size-5" (click)="closeDialog()" aria-label="Cerrar">
          <mat-icon [svgIcon]="'heroicons_outline:x-mark'" class="icon-size-5"></mat-icon>
        </button>
      </div>

      <!-- Title -->
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold">Tu Set</span>
        <span class="text-sm font-medium px-3 py-1 rounded-full flex-shrink-0 ml-2"
          [ngClass]="{
            'bg-green-100 text-green-700': d.getIsComplete(),
            'bg-gray-100 text-gray-500': !d.getIsComplete()
          }">
          {{ d.getSelections().length }}/5
        </span>
      </div>

      @if (d.getSelections().length === 0) {
        <div class="flex flex-col items-center justify-center py-8 text-secondary gap-2">
          <mat-icon [svgIcon]="'heroicons_outline:shopping-bag'" class="icon-size-10 opacity-30"></mat-icon>
          <span class="text-sm">Aun no has seleccionado ninguna fragancia</span>
        </div>
      }

      <!-- Selections list -->
      <div class="flex flex-col gap-2">
        @for (selection of d.getSelections(); track $index) {
          <div class="flex items-center gap-3 p-2 rounded-lg border border-gray-100 bg-gray-50 min-w-0">
            <img
              class="w-10 h-10 rounded object-contain bg-white flex-shrink-0"
              [src]="imagesPath + selection.image"
              alt=""
              onerror="this.src='images/no-image_small.png'" />
            <div class="flex flex-col flex-1 min-w-0">
              <span class="text-xs text-secondary truncate">{{ selection.house }}</span>
              <span class="text-sm font-semibold truncate">{{ selection.itemName }}</span>
            </div>
            <button mat-icon-button class="icon-size-5 flex-shrink-0" (click)="removeSelection($index)" aria-label="Remover">
              <mat-icon [svgIcon]="'heroicons_outline:x-mark'" class="icon-size-4"></mat-icon>
            </button>
          </div>
        }
      </div>

      <!-- Total -->
      @if (d.getSelections().length > 0) {
        <div class="flex justify-between text-lg font-bold p-3 rounded-lg bg-gray-50 border border-gray-200">
          <span>Total del Set</span>
          <span class="text-primary">Q{{ d.getTotalPrice().toFixed(2) }}</span>
        </div>
      }

      <!-- Add to cart -->
      <button
        mat-raised-button
        color="primary"
        class="w-full py-5 text-base font-semibold"
        [disabled]="!d.getIsComplete()"
        (click)="addToCart()">
        @if (d.getIsComplete()) {
          Agregar Set al Carrito - Q{{ d.getTotalPrice().toFixed(2) }}
        } @else {
          Selecciona {{ 5 - d.getSelections().length }} mas
        }
      </button>
    </div>
  `
})
export class SetPreviewDialogComponent {
  private _dialogRef = inject(MatDialogRef<SetPreviewDialogComponent>);
  protected imagesPath = environment.IMAGES_URL;

  constructor(@Inject(MAT_DIALOG_DATA) protected d: SetPreviewData) {}

  removeSelection(index: number): void {
    this.d.onRemove(index);
  }

  closeDialog(): void {
    this._dialogRef.close();
  }

  addToCart(): void {
    this._dialogRef.close({ action: 'addToCart' });
  }
}
