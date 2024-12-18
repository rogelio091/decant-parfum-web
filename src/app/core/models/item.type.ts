export type Item = {
  name: string;
  description: string;
  image: string;
  options: ItemOptions[];
  genders: Gender[];
  status: ItemStatus;
};

export type ItemOptions = {
  name: string;
  price: number;
  status: ItemStatus;
};

export enum ItemStatus {
  Available,
  SoldOut
}

export enum Gender {
  Masculine = 'Masculino',
  Feminine = 'Femenino',
  Unisex = 'Unisex'
}

export function calculateItemStatus(options: ItemOptions[]): ItemStatus {
  // Si al menos una opción está disponible, el estado general es 'Available'
  if (options.some((option) => option.status === ItemStatus.Available)) {
    return ItemStatus.Available;
  }
  // Si todas las opciones están 'SoldOut', el estado general es 'SoldOut'
  return ItemStatus.SoldOut;
}
