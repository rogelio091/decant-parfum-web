import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule, DatePipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  DestroyRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  computed,
  inject,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { fadeInLeft, fadeInRight } from '@fuse/animations/fade';
import { popoverAnimation } from 'app/animations/popover.animation';
import { scaleFadeIn400ms } from 'app/animations/scale-fade-in.animation';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Item } from 'app/core/models/item.type';
import { ItemsCart, ShoppingCart } from 'app/core/objects/cart';
import { ShoppingCartService } from 'app/core/services/shopping-cart.service';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgTemplateOutlet,
    RouterLink,
    ScrollingModule
  ],
  templateUrl: './shopping-cart.component.html',
  animations: [popoverAnimation, fadeInRight, fadeInLeft, scaleFadeIn400ms]
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('shoppingCart') private _cartOrigin: MatButton;
  @ViewChild('cartPanel') private _cartPanel: TemplateRef<any>;
  private _shoppingCartService = inject(ShoppingCartService);

  productsCart = this._shoppingCartService.getShoppingCart();
  // totalCart = 0;
  totalCart = this._shoppingCartService.totalCart;

  images_path = environment.IMAGES_URL;

  private _overlayRef: OverlayRef;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    // private _changeDetectorRef: ChangeDetectorRef,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private _route: ActivatedRoute,
    private _toastService: ToastService,
    private _destroyRef: DestroyRef
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {}

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();

    // Dispose the overlay
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  deleteFromCart(product: ItemsCart) {
    this._shoppingCartService.removeFromShoppingCart(product);
  }

  cleanCart() {
    this._shoppingCartService.cleanShoppingCart();
  }

  /**
   * Open the notifications panel
   */
  openPanel(): void {
    // Return if the notifications panel or its origin is not defined
    if (!this._cartPanel || !this._cartOrigin) {
      return;
    }

    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }

    // Attach the portal to the overlay
    this._overlayRef.attach(new TemplatePortal(this._cartPanel, this._viewContainerRef));
  }

  /**
   * Close the notifications panel
   */
  closePanel(): void {
    this._overlayRef.detach();
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create the overlay
   */
  private _createOverlay(): void {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: 'fuse-backdrop-on-mobile',
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._cartOrigin._elementRef.nativeElement)
        .withLockedPosition(true)
        .withPush(true)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
          }
        ])
    });

    // Detach the overlay from the portal on backdrop click
    this._overlayRef.backdropClick().subscribe(() => {
      this._overlayRef.detach();
    });
  }
}
