import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { toObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FuseAlertComponent } from '@fuse/components/alert';
import { FuseCardComponent } from '@fuse/components/card';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseConfirmationDialogComponent } from '@fuse/services/confirmation/dialog/dialog.component';
import { popoverAnimation } from 'app/animations/popover.animation';
import {
  DinamicFormComponent,
  StateForm
} from 'app/components/dinamic-form/dinamic-form.component';
import { FormTemplateModel } from 'app/components/dinamic-form/models/form-model';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Forms } from 'app/core/forms/forms';
import { ItemsCart } from 'app/core/objects/cart';
import { ShoppingCartService } from 'app/core/services/shopping-cart.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    FuseCardComponent,
    FuseAlertComponent,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    RouterLink,
    ScrollingModule,
    DinamicFormComponent
  ],
  templateUrl: './checkout.component.html',
  animations: [popoverAnimation]
})
export class CheckoutComponent {
  private _shoppingCartService = inject(ShoppingCartService);
  private _destroyRef = inject(DestroyRef);
  private _toastService = inject(ToastService);
  private _route = inject(ActivatedRoute);
  private _fuseConfirmationService = inject(FuseConfirmationService);

  form = signal<FormTemplateModel>(Forms['CheckoutForm']);
  stateForm = signal<StateForm>({ resetForm: false, executeReturn: false });
  form$ = toObservable(this.form);
  stateForm$ = toObservable(this.stateForm);
  applyDiscount = signal<boolean>(false);
  discountToApply = computed(() => {
    const discountAmount = this._shoppingCartService.totalCart() * 0.1;
    return discountAmount;
  });

  shoppingCart = this._shoppingCartService.getShoppingCart();
  totalCart = computed(() => {
    let total = this._shoppingCartService.totalCart();
    if (this.applyDiscount()) {
      total = total * 0.9; // Aplicar 10% de descuento
    }
    return total;
  });

  images_path = environment.IMAGES_URL;

  ngOnInit(): void {
    const today = new Date();
    const discountStart = new Date(today.getFullYear(), 11, 20); // December 20th
    const discountEnd = new Date(today.getFullYear(), 11, 31); // December 31st

    if (today >= discountStart && today <= discountEnd) {
      this.applyDiscount.set(true);
    }
  }

  deleteFromCart(product: ItemsCart) {
    this._shoppingCartService.removeFromShoppingCart(product);
  }

  modifyQuantity(product: ItemsCart, event: MatSelectChange) {
    console.log(event);
    product.quantity = Number(event.value);
    this._shoppingCartService.modifyQuantityItemCart(product);
  }

  cleanCart() {
    this._shoppingCartService.cleanShoppingCart();
  }

  executeForm() {
    this.stateForm.set({ resetForm: false, executeReturn: true });
  }

  sendOrder(data: {
    webCustomerFullName: string;
    webCustomerPhoneNumber: number;
    address: string;
  }) {
    if (this.shoppingCart().items?.length === 0) {
      this._toastService.showErrorToast('No hay productos en el carrito');
      return;
    }
    if (data === undefined) {
      this._toastService.showErrorToast('No se ha completado el formulario');
      return;
    }
    console.log(data);
    const phoneNumber = '50239730756'; // Tu número en formato internacional

    // Lista de productos
    const products = this.shoppingCart().items;

    // Generar el mensaje dinámicamente
    const productList = products
      .map(
        (product) =>
          `- ${product.quantity} x ${product.house} - ${product.itemName} (${product.name}) Q${product.price * product.quantity} `
      )
      .join('\n');

    // const message = `Hola mi nombre es ${data.webCustomerFullName}, quiero compartir esta lista de productos:\n${productList}\n\nTotal: Q${this.totalCart()} \n\nDirección de entrega: ${data.address} \n Número de teléfono: ${data.webCustomerPhoneNumber}`;
    const message = `Hola mi nombre es ${data.webCustomerFullName}, quiero compartir esta lista de productos:\n${productList}

    Total: Q${this.totalCart()} ${this.applyDiscount() ? `(Incluye descuento de -Q${this.discountToApply()})` : ''}
  
    Dirección de entrega: ${data.address}
    Número de teléfono: ${data.webCustomerPhoneNumber}`;
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    // Construir el enlace de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirigir al enlace de WhatsApp
    window.open(whatsappUrl, '_blank');
    this.confirmSendedOrder();
  }

  confirmSendedOrder() {
    this._fuseConfirmationService
      .open({
        title: '¿Has podido enviar tú pedido por Whatsapp?',
        message:
          'Si no has podido enviar tú orden por medio de whatsapp, puedes intentar nuevamente.',
        icon: {
          show: true,
          name: 'heroicons_outline:question-mark-circle',
          color: 'warning'
        },
        actions: {
          confirm: {
            show: true,
            label: 'Sí',
            color: 'primary'
          },
          cancel: {
            show: true,
            label: 'No'
          }
        },
        dismissible: false
      })
      .afterClosed()
      .subscribe((result: string) => {
        if (result === 'confirmed') {
          this._toastService.showSuccessToast('Carrito restablecido');
          this.stateForm.set({ resetForm: true, executeReturn: false });
          this.cleanCart();
        }
      });
  }
}
