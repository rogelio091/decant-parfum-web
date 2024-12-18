import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastAlertComponent } from './components/toast-alert/toast-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, ToastAlertComponent, NgxSpinnerModule]
})
export class AppComponent {
  /**
   * Constructor
   */
  constructor() {}
}
