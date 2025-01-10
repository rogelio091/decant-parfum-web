import { Item, ItemOptions } from '../models/item.type';
import { signal } from '@angular/core';

export type ShoppingCart = {
  items: ItemsCart[];
};

export type ItemsCart = ItemOptions & {
  image: string;
  house: string;
  itemName: string;
  itemId: number;
  quantity: number;
};
