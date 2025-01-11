import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { faqs } from './faqs';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatIconModule, NgFor, MatExpansionModule],
  templateUrl: './faqs.component.html'
})
export class FaqsComponent {
  faqs = faqs;

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
