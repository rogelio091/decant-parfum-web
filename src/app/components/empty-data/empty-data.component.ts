import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-empty-data',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './empty-data.component.html',
})
export class EmptyDataComponent {}
