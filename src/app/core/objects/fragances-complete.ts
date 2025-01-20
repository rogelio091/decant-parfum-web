import { Gender, Item, ItemStatus } from 'app/core/models/item.type';

const image_basePath = 'images/fragances/';

export const fragances_catalogue_general: Item[] = [
  {
    house: 'Bharara',
    name: 'Rohit Azure',
    description:
      'Esta fragancia es ideal para el uso diario y ocasiones especiales, ofreciendo una experiencia olfativa que evoluciona a lo largo del día, desde una apertura vibrante hasta una base reconfortante.',
    image: image_basePath + 'bharararohit.jpg',
    notes: {
      top: 'bergamota, mandarina, naranja dulce, limón, jengibre',
      middle: 'cognac, mimosa francesa, neroli, osmanto, jazmín blanco',
      base: 'vainilla cremosa, ámbar, sándalo, almizcle'
    },
    options: [
      //   { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '100ml', price: 600.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 161
  },
  {
    id: 1021,
    house: 'Grandeur',
    name: 'Elite Florist',
    description:
      'Fragancia femenina que captura la esencia de un jardín en plena floración. Se abre con la frescura vibrante de la peonía, que aporta una nota inicial ligera y aireada. En el corazón, la rosa y el osmanthus se entrelazan, ofreciendo un bouquet floral rico y sofisticado. La base de sándalo añade profundidad y calidez, creando un aroma equilibrado que es tanto elegante como acogedor. Esta fragancia es ideal para mujeres modernas que buscan un perfume que combine frescura floral con una base amaderada suave, perfecto para el uso diario o eventos especiales.',
    image: image_basePath + 'grandeur_elite_florist.jpg',
    notes: {
      top: 'peonía',
      middle: 'rosa, osmanthus',
      base: 'sándalo'
    },
    options: [
      //   { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '100ml', price: 500.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 991,
    house: 'Bharara',
    name: 'Rohit Delicate',
    description:
      'Ofrece una deliciosa sinfonía de notas exóticas y dulces. La fragancia se abre con el aroma vibrante y jugoso de la mandarina, acompañado de una mezcla de frutas tropicales que te transportan instantáneamente a un paraíso exuberante. En el corazón, florece con el encanto embriagador de la orquídea y el heliotropo, añadiendo una riqueza floral que es a la vez delicada y cautivadora. La faceta gourmand emerge con el delicioso aroma del postre de frutos rojos, que se mezcla perfectamente con la cremosa vainilla para crear una dulzura deliciosa. A medida que la fragancia se seca, revela una base cálida y sensual de almizcle y sándalo, dejando una impresión duradera que es a la vez reconfortante y sofisticada.',
    image: image_basePath + 'bharara_rohit_delicate.jpg',
    notes: {
      top: 'mandarina, frutas tropicales',
      middle: 'orquídea, heliotropo',
      base: 'postre de frutos rojos, vainilla, almizcle, sándalo'
    },
    options: [
      //   { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '100ml', price: 500.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  }
];

export const fragances_catalogue = [...fragances_catalogue_general].sort((a, b) => {
  // Primero, comparar por la propiedad 'house'
  if (a.house < b.house) return -1;
  if (a.house > b.house) return 1;

  // Si 'house' es igual, comparar por la propiedad 'name'
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;

  // Si ambos son iguales, devolver 0
  return 0;
});
