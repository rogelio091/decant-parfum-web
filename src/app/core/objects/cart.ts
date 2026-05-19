import { ItemOptions } from '../models/item.type';

export type ShoppingCart = {
  items: ItemsCart[];
};

export type ItemsCart = ItemOptions & {
  image: string;
  house: string;
  itemName: string;
  itemId: number;
  quantity: number;
  /** Solo para sets: lista las 5 fragancias incluidas */
  setFragrances?: Array<{ house: string; name: string }>;
};
