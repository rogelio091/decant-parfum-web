import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogData } from 'app/core/models/dialog.type';

@Component({
  selector: 'app-dialog-layout',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dialog-layout.component.html',
  styleUrl: './dialog-layout.component.scss'
})
export class DialogLayoutComponent {
  @Input() data: DialogData;
}
