import { Injectable, OnInit, WritableSignal, computed, inject, signal } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastService } from 'app/components/toast-alert/toast.service';
import { Item } from '../models/item.type';
import { ItemsCart, ShoppingCart } from '../objects/cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _storageService = inject(StorageService);
  private _keyCart: string;
  private _cart = signal<ShoppingCart>({ items: [] });
  private _toastService = inject(ToastService);
  totalCart = computed(() => {
    console.log('Calculating total cart');
    return this._cart().items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  });

  constructor() {
    this._keyCart = 'shopping-cart';
    this._cart.set(this._storageService.getValue<ShoppingCart>(this._keyCart) || { items: [] });
  }

  setKeyCart(key: string) {
    this._keyCart = key;
  }

  addToShoppingCart(product: ItemsCart) {
    const currentCart = this._cart();

    const updatedItems = [...currentCart.items];

    const existingItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.itemId === product.itemId && cartItem.name === product.name
    );

    if (existingItemIndex !== -1) {
      if (product.quantity + updatedItems[existingItemIndex].quantity > 5) {
        this._toastService.showErrorToast('No puedes agregar más de 5 unidades del mismo producto');
        return;
      }
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + product.quantity
      };
    } else {
      updatedItems.push(product);
    }

    this._cart.set({
      ...currentCart,
      items: updatedItems
    });

    this._toastService.showSuccessToast('Elemento agregado al carrito');
    this._storageService.saveValue(this._keyCart, this._cart());
  }

  modifyQuantityItemCart(product: ItemsCart) {
    const currentCart = this._cart();

    const updatedItems = [...currentCart.items];

    const existingItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.itemId === product.itemId && cartItem.name === product.name
    );

    if (existingItemIndex !== -1) {
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: product.quantity
      };
    }

    this._cart.set({
      ...currentCart,
      items: updatedItems
    });
    this._storageService.saveValue(this._keyCart, this._cart());
  }

  getShoppingCart(): WritableSignal<ShoppingCart> {
    return this._cart;
  }

  removeFromShoppingCart(product: ItemsCart) {
    const currentCart = this._cart();

    const updatedItems = [...currentCart.items];

    const existingItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.itemId === product.itemId && cartItem.name === product.name
    );

    if (existingItemIndex !== -1) {
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity - product.quantity
      };

      if (updatedItems[existingItemIndex].quantity <= 0) {
        updatedItems.splice(existingItemIndex, 1);
      }

      this._cart.set({
        ...currentCart,
        items: updatedItems
      });
      this._toastService.showSuccessToast('Elemento eliminado del carrito');
      this._storageService.saveValue(this._keyCart, this._cart());
    }
  }

  cleanShoppingCart() {
    this._storageService.clearValues();
    this._cart.set({ items: [] });
  }
}
