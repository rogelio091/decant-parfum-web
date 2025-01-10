export type Item = {
  id: number;
  house: string;
  name: string;
  description: string;
  image: string;
  notes: NotesOptions;
  options: ItemOptions[];
  gender: Gender;
  status: ItemStatus;
};

export type ItemOptions = {
  name: string;
  price: number;
  status: ItemStatus;
};

export type NotesOptions = {
  top: string;
  middle: string;
  base: string;
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
