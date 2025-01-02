import { Gender, Item, ItemStatus } from 'app/core/models/item.type';

const image_basePath = 'images/fragances/';

export const items_catalogue: Item[] = [
  {
    house: 'Adolfo Dominguez',
    name: 'Lima Tonka',
    description:
      'Combina notas vibrantes que evocan energía y vitalidad con una base cálida y suave, ideal para climas cálidos y uso diario. Su versatilidad la hace perfecta para hombres que buscan una esencia moderna y equilibrada.',
    image: image_basePath + 'Limatonka.jpg',
    notes: {
      top: 'lima, limón, acorde marino',
      middle: 'haba tonka, cedro, pachulí',
      base: 'sándalo, almizcle'
    },
    options: [
      { name: '5ml', price: 30.0, status: ItemStatus.Available },
      { name: '10ml', price: 60.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine, // Add appropriate gender here
    status: undefined
  },
  {
    house: 'Adyan',
    name: 'Rehla',
    description:
      'Esta composición equilibrada la hace ideal para mujeres que buscan una fragancia dulce y sofisticada, adecuada para diversas ocasiones. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo del día.',
    image: image_basePath + 'adyanrehla.jpg',
    notes: {
      top: 'pera, naranja tangerina, bergamota, lichi',
      middle: 'fresa, orquídea de vainilla, café',
      base: 'praliné, caramelo, vainilla, pachulí, incienso, regaliz, cumarina, papiro de Egipto'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Afnan',
    name: '9AM Dive',
    description:
      'Es valorada por su longevidad y proyección moderada, siendo adecuada para diversas ocasiones, especialmente en climas cálidos. Algunos usuarios han notado similitudes con fragancias de alta gama, considerándola una alternativa accesible sin comprometer la calidad.',
    image: image_basePath + '9amdive.webp',
    notes: {
      top: 'limón, menta, grosella negra, pimienta rosa',
      middle: 'manzana, incienso, cedro',
      base: 'jengibre, sándalo, pachulí, jazmín'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Afnan',
    name: '9AM Femme',
    description:
      'Esta composición equilibrada la hace ideal para mujeres que buscan una fragancia versátil y sofisticada, adecuada para diversas ocasiones. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo del día.',
    image: image_basePath + '9amfemme.webp',
    notes: {
      top: 'mandarina, bergamota, toronja (pomelo)',
      middle: 'grosella negra, frambuesa',
      base: 'almizcle, ámbar, naranja'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Afnan',
    name: '9PM Femme',
    description:
      'Esta composición equilibrada la hace ideal para mujeres que buscan una fragancia versátil y sofisticada, adecuada para diversas ocasiones, especialmente para uso nocturno. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo de la noche.',
    image: image_basePath + '9pmfemme.webp',
    notes: {
      top: 'frambuesa, manzana, violeta, naranja',
      middle: 'rosa, peonía, iris, jazmín',
      base: 'ciprés, pino, cedro, ámbar'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Afnan',
    name: '9PM Rebel',
    description:
      'Esta composición se abre con una explosión jugosa de frutas, seguida de un corazón amaderado y un fondo dulce y cálido, ofreciendo una experiencia olfativa equilibrada y versátil.',
    image: image_basePath + '9pmrebel.jpg',
    notes: {
      top: 'mandarina, piña, manzana Granny Smith',
      middle: 'cedro, musgo de roble, vainilla',
      base: 'caramelo, maderas secas, ámbar gris, almizcle'
    },

    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Afnan',
    name: '9PM',
    description:
      'Es frecuentemente comparada con fragancias de diseñador como "Jean Paul Gaultier Ultra Male," siendo una alternativa más accesible pero igualmente sofisticada. Su proyección y longevidad son notables, lo que la convierte en una elección destacada para quienes buscan un perfume que deje huella.',
    image: image_basePath + '9pm.jpg',
    notes: {
      top: 'manzana, canela, lavanda silvestre, bergamota',
      middle: 'flor de azahar del naranjo, lirio de los valles (muguete)',
      base: 'vainilla, haba tonka, ámbar, pachulí'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Al Haramain',
    name: 'Amber Oud Gold',
    description:
      'Se caracteriza por una apertura fresca con notas de bergamota y acordes verdes, que dan paso a un corazón dulce y afrutado de melón, piña y notas dulces, complementadas por ámbar. La base combina notas amaderadas, vainilla y almizcle, ofreciendo una estela cálida y envolvente.',
    image: image_basePath + 'alharamainoudgold.webp',
    notes: {
      top: 'bergamota, notas verdes',
      middle: 'melón, piña, notas dulces, ámbar',
      base: 'almizcle, vainilla, notas amaderadas'
    },

    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Arabiyat',
    name: 'Nyla',
    description:
      'Esta composición se abre con una mezcla vibrante de frutas, coco y néctar de durazno, que aportan una dulzura tropical. El corazón floral, dominado por las flores de tiaré, añade una elegancia exótica. La base de sándalo y heliotropo proporciona una calidez cremosa y un toque empolvado, respectivamente, que redondean la fragancia con suavidad y profundidad.',
    image: image_basePath + 'nyla.webp',
    notes: {
      top: 'acorde frutal, coco, néctar de durazno',
      middle: 'acorde floral, flores de tiaré',
      base: 'sándalo, heliotropo'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Armaf',
    name: 'Odyssey Mandarin Sky',
    description:
      'Esta composición equilibrada la hace ideal para hombres que buscan una fragancia versátil y sofisticada, adecuada para diversas ocasiones. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo del día.',
    image: image_basePath + 'mandarinsky.webp',
    notes: {
      top: 'mandarina, naranja, azafrán, salvia',
      middle: 'caramelo, haba tonka, cempasúchil (tagete, clavelón)',
      base: 'ambroxan, vetiver, cedro'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Armaf',
    name: 'Club de Nuit Intense EDP',
    description:
      'Esta composición se abre con una mezcla vibrante de cítricos y frutas, seguida de un corazón floral y amaderado, y culmina con una base cálida y sensual. Es ideal para hombres que buscan una fragancia versátil y duradera, adecuada para diversas ocasiones.',
    image: image_basePath + 'clubdenuitedp.jpg',
    notes: {
      top: 'limón, piña, grosellas negras, bergamota, manzana',
      middle: 'abedul, jazmín, rosa',
      base: 'almizcle, ámbar gris, pachulí, vainilla'
    },

    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Armaf',
    name: 'Club de Nuit Women EDP',
    description:
      'Esta composición se abre con notas cítricas y afrutadas, seguida de un corazón floral y exótico, y culmina con una base cálida y terrosa. Es ideal para mujeres que buscan una fragancia versátil y duradera, adecuada para diversas ocasiones.',
    image: image_basePath + 'clubdenuitwomen.jpg',
    notes: {
      top: 'naranja, toronja (pomelo), bergamota, durazno (melocotón)',
      middle: 'rosa, jazmín, geranio, lichi',
      base: 'pachulí, vainilla, almizcle, vetiver'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Banderas',
    name: 'The Icon Attitude',
    description:
      'Es una fragancia masculina de la familia olfativa aromática fougère, diseñada para hombres modernos y seguros de sí mismos. Esta Eau de Parfum se caracteriza por una composición equilibrada que combina notas frescas, dulces y amaderadas.',
    image: image_basePath + 'banderasattitude.jpg',
    notes: {
      top: 'mandarina, néctar de pera, pimienta rosa',
      middle: 'lavanda, geranio, jazmín',
      base: 'sándalo, ámbar, caramelo, musgo'
    },
    options: [
      { name: '5ml', price: 35.0, status: ItemStatus.Available },
      { name: '10ml', price: 70.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Bharara',
    name: 'King EDP',
    description:
      'Esta composición equilibrada la hace ideal para hombres que buscan una fragancia versátil y sofisticada, adecuada para diversas ocasiones. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo del día.',
    image: image_basePath + 'bhararaking.webp',
    notes: {
      top: 'naranja, limón, bergamota',
      middle: 'notas afrutadas',
      base: 'vainilla, almizcle blanco, ámbar'
    },

    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Bharara',
    name: 'King Gold Edition EDP',
    description:
      'Esta composición se abre con una explosión cítrica de naranja dulce, bergamota y limón, proporcionando una entrada fresca y energizante. El corazón introduce una mezcla dulce y exótica de frutos rojos y coco, aportando profundidad y carácter a la fragancia. Finalmente, la base combina almizcle blanco, vainilla y ámbar, ofreciendo una estela cálida y envolvente que perdura en la piel.',
    image: image_basePath + 'bhararakinggold.webp',
    notes: {
      top: 'naranja dulce, bergamota, limón',
      middle: 'frutas rojas, coco',
      base: 'almizcle blanco, vainilla, ámbar'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
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
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Bharara',
    name: 'Rome Pour Femme',
    description:
      'Esta armoniosa fusión de notas la hace una fragancia cautivadora para la mujer moderna y segura de sí misma. Es ideal para diversas ocasiones, desde salidas casuales hasta eventos formales, y se adapta especialmente bien a las estaciones de primavera, otoño e invierno. Su duración es notable, permaneciendo en la piel entre 6 y 8 horas.',
    image: image_basePath + 'bharararomefemme.webp',
    notes: {
      top: 'grosella negra, pimienta rosa, bergamota',
      middle: 'jazmín',
      base: 'vainilla, cachemira, madera de guayaco'
    },

    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Bharara',
    name: 'Rome Pour Homme',
    description:
      'Esta composición se abre con la frescura de la lavanda, aportando un toque floral y calmante. En el corazón, la cálida vainilla añade una suavidad cremosa y dulce. La base está anclada por el carácter verde y amaderado del vetiver, proporcionando un acabado refinado y masculino.',
    image: image_basePath + 'bharararomehomme.webp',
    notes: {
      top: 'lavanda',
      middle: 'vainilla',
      base: 'vetiver'
    },

    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Bharara',
    name: 'Velvet Rose',
    description:
      'Ha sido comparada con el perfume "Yara" de Lattafa, destacando por su desempeño superior en términos de duración y proyección. Es ideal para quienes buscan una fragancia dulce y floral con un toque oriental, adecuada para diversas ocasiones y estaciones del año.',
    image: image_basePath + 'bhararavelvetrose.png',
    notes: {
      top: 'orquídea, heliotropo, naranja tangerina',
      middle: 'acuerdo goloso, frutas tropicales',
      base: 'vainilla, almizcle, sándalo'
    },

    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Burberry',
    name: 'Women',
    description:
      'Apertura fresca y aromática, seguida de un corazón floral y amaderado, y culmina con una base cálida y reconfortante.',
    image: image_basePath + 'burberrywomen.jpg',
    notes: {
      top: 'lavanda, bergamota, tomillo, menta',
      middle: 'geranio, sándalo, musgo, cedro',
      base: 'ámbar, haba tonka'
    },

    options: [
      { name: '5ml', price: 40.0, status: ItemStatus.Available },
      { name: '10ml', price: 80.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Burberry',
    name: 'Hero EDP',
    description:
      'Apertura fresca y resinosa, seguida de un corazón cálido y especiado, y culmina con una base robusta y amaderada.',
    image: image_basePath + 'burberryheroedp.jpg',
    notes: {
      top: 'agujas de pino, incienso de olíbano (franquincienso)',
      middle: 'benjuí, incienso',
      base: 'cedro del Atlas, cedro del Himalaya, cedro de Virginia'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Carolina Herrera',
    name: '212 Men',
    description:
      'Apertura fresca y especiada, seguida de un corazón floral y aromático, y culmina con una base amaderada y almizclada que aporta profundidad y calidez a la fragancia.',
    image: image_basePath + '212men.png',
    notes: {
      top: 'notas verdes, toronja (pomelo), especias, bergamota, lavanda, petit grain',
      middle: 'jengibre, violeta, gardenia, salvia',
      base: 'almizcle, sándalo, incienso, vetiver, madera de gaiac, ládano'
    },

    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Carolina Herrera',
    name: '212 VIP Black',
    description:
      'Apertura especiada y ligeramente amarga, seguida de un corazón aromático de lavanda, y culmina con una base dulce y almizclada que aporta profundidad y sensualidad a la fragancia.',
    image: image_basePath + '212vipblack.jpg',
    notes: {
      top: 'absenta, anís, hinojo',
      middle: 'lavanda',
      base: 'vaina de vainilla negra, almizcle'
    },

    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Carolina Herrera',
    name: 'CH Men Pasión',
    description:
      'Apertura especiada y aromática, seguida de un corazón floral y amaderado, y culmina con una base cálida y profunda que aporta sofisticación y elegancia a la fragancia.',
    image: image_basePath + 'chmenpasion.jpg',
    notes: {
      top: 'incienso de olíbano (franquincienso), neroli de Túnez, pimienta rosa',
      middle: 'iris, mirra, cedro de Texas',
      base: 'sándalo australiano, vainilla Bourbon, haba tonka, notas amaderadas oscuras, Amberwood'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Clinique',
    name: 'Happy For Men',
    description:
      'Apertura fresca y cítrica, seguida de un corazón floral suave, y culmina con una base amaderada y almizclada que aporta profundidad y calidez a la fragancia.',
    image: image_basePath + 'cliniqueformen.webp',
    notes: {
      top: 'mandarina, lima, notas marinas, limón, notas verdes',
      middle: 'fresia, jazmín, lirio de los valles, rosa',
      base: 'ciprés, cedro, almizcle, madera de gaiac'
    },

    options: [
      { name: '5ml', price: 40.0, status: ItemStatus.Available },
      { name: '10ml', price: 80.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Dolce & Gabbana',
    name: 'Light Blue',
    description:
      'Apertura fresca y afrutada, seguida de un corazón floral delicado, y culmina con una base amaderada y almizclada que aporta profundidad y calidez a la fragancia.',
    image: image_basePath + 'lightbluewomen.jpg',
    notes: {
      top: 'limón siciliano, manzana, cedro, campanilla',
      middle: 'bambú, jazmín, rosa blanca',
      base: 'cedro, almizcle, ámbar'
    },

    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  }
  //   {
  //     name: 'Dolce & Gabbana The One Men EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Dolce & Gabbana The One Women EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Elizabeth Arden My Fifth Avenue',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 60.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 120.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Giorgio Armani Acqua Di Gio EDT',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Giorgio Armani Acqua Di Gio Parfum',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Giorgio Armani Acqua Di Gio Profondo EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Giorgio Armani Stronger With You Intensely',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 100.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 200.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Gisada Ambassador Men',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 110.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 220.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Givenchy Gentleman Society Extreme',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Givenchy Irresistible',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Halloween Man X',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 40.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 80.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Hermes H24 Herbes Vives',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 100.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 200.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Hugo Boss Bottled Elixir',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jean Paul Gaultier Le Beau Le Parfum',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jean Paul Gaultier Le Beau Paradise Garden',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jean Paul Gaultier Le Male Elixir',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jean Paul Gaultier Le Male Le Parfum',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jean Paul Gaultier Le Male Lover',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jean Paul Gaultier Ultra Male',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jo Milano GOS Ace',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jo Milano GOS BID',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jo Milano GOS Diamond',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jo Milano GOS Higher Roller',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jo Milano GOS Jackpot',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jo Milano GOS King',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jo Milano GOS Moon',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Jo Milano GOS Rouge Extrait',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lancome La Vie Est Belle Rose Extraordinaire',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 100.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 200.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Asad',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Asad Zanzibar',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Eclaire EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Haya EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 60.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 120.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Her Confession',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa His Confession',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Honor & Glory',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Khamrah',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Khamrah Qahwa',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 60.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 120.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Mayar for Women',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 40.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 80.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Yara',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Yara Candy',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Yara Moi',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Lattafa Yara Tous',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 50.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 100.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Maison Alhambra Jean Lowe Immortel',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: "Maison Alhambra L'Intrude",
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Montblanc Explorer',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Montblanc Explorer Platinum',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Narciso Rodriguez Bleu Noir EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Paco Rabanne Invictus Parfum',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Paco Rabanne Phantom EDP Intense',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Ralph Lauren Ralph',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Rasasi Hawas Black',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Rasasi Hawas For Him',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Rasasi Hawas Ice',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Rasasi Hawas Pour Femme',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Tommy Hilfiger Tommy Girl EDT',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 60.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 120.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Versace Crystal Noir EDT',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Versace Eros EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 60.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 120.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Versace Eros Flame',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Versace Oud Noir',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 70.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 140.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Versace Pour Femme Dylan Purple EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Versace Pour Homme',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 60.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 120.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Versace Versense',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 60.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 120.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Xerjoff 1861 Naxos',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 180.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 360.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Xerjoff Erba Pura',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 160.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 320.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Yves Saint Laurent Libre EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 100.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 200.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Yves Saint Laurent Myslf EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 90.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 180.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   },
  //   {
  //     name: 'Yves Saint Laurent Y EDP',
  //     description: '',
  //     image: '',
  //     options: [
  //       { name: '5ml', price: 80.0, status: ItemStatus.Available },
  //       { name: '10ml', price: 160.0, status: ItemStatus.Available }
  //     ],
  //     gender: [],
  //     status: undefined
  //   }
];
