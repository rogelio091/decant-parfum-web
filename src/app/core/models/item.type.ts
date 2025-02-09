export type Item = {
  id?: number;
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
  name: SizeOptions;
  price: number;
  isFullBottle?: boolean;
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

export enum SizeOptions {
  ML5 = '5ml',
  ML10 = '10ml',
  ML50 = '50ml',
  ML100 = '100ml'
}

export function calculateItemStatus(options: ItemOptions[]): ItemStatus {
  // Si al menos una opción está disponible, el estado general es 'Available'
  if (options.some((option) => option.status === ItemStatus.Available)) {
    return ItemStatus.Available;
  }
  // Si todas las opciones están 'SoldOut', el estado general es 'SoldOut'
  return ItemStatus.SoldOut;
}

export function calculateIsFullBottle(options: ItemOptions[]): boolean {
  // Verifica si alguna opción no es 5ml o 10ml
  return options.some(
    (option) => option.name !== SizeOptions.ML5 && option.name !== SizeOptions.ML10
  );
}

export function InitializeItem(): Item {
  return {
    house: '',
    name: '',
    description: '',
    image: '',
    notes: {
      top: '',
      middle: '',
      base: ''
    },
    options: [
      {
        name: SizeOptions.ML5,
        price: 0,
        status: ItemStatus.Available
      },
      {
        name: SizeOptions.ML10,
        price: 0,
        status: ItemStatus.Available
      },
      {
        name: SizeOptions.ML50,
        price: 0,
        status: ItemStatus.Available
      },
      {
        name: SizeOptions.ML100,
        price: 0,
        status: ItemStatus.Available
      }
    ],
    gender: undefined,
    status: 0
  };
}
