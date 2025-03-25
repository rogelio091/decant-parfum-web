import { Gender, Item, ItemStatus, SizeOptions } from 'app/core/models/item.type';

const image_basePath = 'images/fragances/';

export const items_catalogue_general: Item[] = [
  {
    id: 1,
    house: 'Adolfo Dominguez',
    name: 'Lima Tonka',
    description:
      'Combina notas vibrantes que evocan energía y vitalidad con una base cálida y suave, ideal para climas cálidos y uso diario. Su versatilidad la hace perfecta para hombres que buscan una esencia moderna y equilibrada.',
    image: 'Limatonka.jpg',
    notes: {
      top: 'lima, limón, acorde marino',
      middle: 'haba tonka, cedro, pachulí',
      base: 'sándalo, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 30.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 60.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine, // Add appropriate gender here
    status: undefined
  },
  {
    id: 2,
    house: 'Adyan',
    name: 'Rehla',
    description:
      'Esta composición equilibrada la hace ideal para mujeres que buscan una fragancia dulce y sofisticada, adecuada para diversas ocasiones. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo del día.',
    image: 'adyanrehla.jpg',
    notes: {
      top: 'pera, naranja tangerina, bergamota, lichi',
      middle: 'fresa, orquídea de vainilla, café',
      base: 'praliné, caramelo, vainilla, pachulí, incienso, regaliz, cumarina, papiro de Egipto'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 3,
    house: 'Afnan',
    name: '9AM Dive',
    description:
      'Es valorada por su longevidad y proyección moderada, siendo adecuada para diversas ocasiones, especialmente en climas cálidos. Algunos usuarios han notado similitudes con fragancias de alta gama, considerándola una alternativa accesible sin comprometer la calidad.',
    image: '9amdive.webp',
    notes: {
      top: 'limón, menta, grosella negra, pimienta rosa',
      middle: 'manzana, incienso, cedro',
      base: 'jengibre, sándalo, pachulí, jazmín'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Afnan',
    name: '9AM Femme',
    description:
      'Esta composición equilibrada la hace ideal para mujeres que buscan una fragancia versátil y sofisticada, adecuada para diversas ocasiones. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo del día.',
    image: '9amfemme.webp',
    notes: {
      top: 'mandarina, bergamota, toronja (pomelo)',
      middle: 'grosella negra, frambuesa',
      base: 'almizcle, ámbar, naranja'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 4
  },
  {
    house: 'Afnan',
    name: '9PM Femme',
    description:
      'Esta composición equilibrada la hace ideal para mujeres que buscan una fragancia versátil y sofisticada, adecuada para diversas ocasiones, especialmente para uso nocturno. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo de la noche.',
    image: '9pmfemme.webp',
    notes: {
      top: 'frambuesa, manzana, violeta, naranja',
      middle: 'rosa, peonía, iris, jazmín',
      base: 'ciprés, pino, cedro, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 5
  },
  {
    house: 'Afnan',
    name: '9PM Rebel',
    description:
      'Esta composición se abre con una explosión jugosa de frutas, seguida de un corazón amaderado y un fondo dulce y cálido, ofreciendo una experiencia olfativa equilibrada y versátil.',
    image: '9pmrebel.jpg',
    notes: {
      top: 'mandarina, piña, manzana Granny Smith',
      middle: 'cedro, musgo de roble, vainilla',
      base: 'caramelo, maderas secas, ámbar gris, almizcle'
    },

    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 6
  },
  {
    house: 'Afnan',
    name: '9PM',
    description:
      'Es frecuentemente comparada con fragancias de diseñador como "Jean Paul Gaultier Ultra Male," siendo una alternativa más accesible pero igualmente sofisticada. Su proyección y longevidad son notables, lo que la convierte en una elección destacada para quienes buscan un perfume que deje huella.',
    image: '9pm.jpg',
    notes: {
      top: 'manzana, canela, lavanda silvestre, bergamota',
      middle: 'flor de azahar del naranjo, lirio de los valles (muguete)',
      base: 'vainilla, haba tonka, ámbar, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 7
  },
  {
    house: 'Al Haramain',
    name: 'Amber Oud Gold',
    description:
      'Se caracteriza por una apertura fresca con notas de bergamota y acordes verdes, que dan paso a un corazón dulce y afrutado de melón, piña y notas dulces, complementadas por ámbar. La base combina notas amaderadas, vainilla y almizcle, ofreciendo una estela cálida y envolvente.',
    image: 'alharamainoudgold.webp',
    notes: {
      top: 'bergamota, notas verdes',
      middle: 'melón, piña, notas dulces, ámbar',
      base: 'almizcle, vainilla, notas amaderadas'
    },

    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 8
  },
  {
    house: 'Arabiyat',
    name: 'Nyla',
    description:
      'Esta composición se abre con una mezcla vibrante de frutas, coco y néctar de durazno, que aportan una dulzura tropical. El corazón floral, dominado por las flores de tiaré, añade una elegancia exótica. La base de sándalo y heliotropo proporciona una calidez cremosa y un toque empolvado, respectivamente, que redondean la fragancia con suavidad y profundidad.',
    image: 'nyla.webp',
    notes: {
      top: 'acorde frutal, coco, néctar de durazno',
      middle: 'acorde floral, flores de tiaré',
      base: 'sándalo, heliotropo'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 9
  },
  {
    house: 'Armaf',
    name: 'Odyssey Mandarin Sky',
    description:
      'Esta composición equilibrada la hace ideal para hombres que buscan una fragancia versátil y sofisticada, adecuada para diversas ocasiones. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo del día.',
    image: 'mandarinsky.webp',
    notes: {
      top: 'mandarina, naranja, azafrán, salvia',
      middle: 'caramelo, haba tonka, cempasúchil (tagete, clavelón)',
      base: 'ambroxan, vetiver, cedro'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 10
  },
  {
    house: 'Armaf',
    name: 'Club de Nuit Intense EDP',
    description:
      'Esta composición se abre con una mezcla vibrante de cítricos y frutas, seguida de un corazón floral y amaderado, y culmina con una base cálida y sensual. Es ideal para hombres que buscan una fragancia versátil y duradera, adecuada para diversas ocasiones.',
    image: 'clubdenuitedp.jpg',
    notes: {
      top: 'limón, piña, grosellas negras, bergamota, manzana',
      middle: 'abedul, jazmín, rosa',
      base: 'almizcle, ámbar gris, pachulí, vainilla'
    },

    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 11
  },
  {
    house: 'Armaf',
    name: 'Club de Nuit Women EDP',
    description:
      'Esta composición se abre con notas cítricas y afrutadas, seguida de un corazón floral y exótico, y culmina con una base cálida y terrosa. Es ideal para mujeres que buscan una fragancia versátil y duradera, adecuada para diversas ocasiones.',
    image: 'clubdenuitwomen.jpg',
    notes: {
      top: 'naranja, toronja (pomelo), bergamota, durazno (melocotón)',
      middle: 'rosa, jazmín, geranio, lichi',
      base: 'pachulí, vainilla, almizcle, vetiver'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 12
  },
  {
    house: 'Banderas',
    name: 'The Icon Attitude',
    description:
      'Es una fragancia masculina de la familia olfativa aromática fougère, diseñada para hombres modernos y seguros de sí mismos. Esta Eau de Parfum se caracteriza por una composición equilibrada que combina notas frescas, dulces y amaderadas.',
    image: 'banderasattitude.jpg',
    notes: {
      top: 'mandarina, néctar de pera, pimienta rosa',
      middle: 'lavanda, geranio, jazmín',
      base: 'sándalo, ámbar, caramelo, musgo'
    },
    options: [
      { name: SizeOptions.ML5, price: 35.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 70.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 13
  },
  {
    house: 'Bharara',
    name: 'King EDP',
    description:
      'Esta composición equilibrada la hace ideal para hombres que buscan una fragancia versátil y sofisticada, adecuada para diversas ocasiones. Su longevidad y proyección son notables, asegurando una presencia duradera a lo largo del día.',
    image: 'bhararaking.webp',
    notes: {
      top: 'naranja, limón, bergamota',
      middle: 'notas afrutadas',
      base: 'vainilla, almizcle blanco, ámbar'
    },

    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 14
  },
  {
    house: 'Bharara',
    name: 'King Gold Edition EDP',
    description:
      'Esta composición se abre con una explosión cítrica de naranja dulce, bergamota y limón, proporcionando una entrada fresca y energizante. El corazón introduce una mezcla dulce y exótica de frutos rojos y coco, aportando profundidad y carácter a la fragancia. Finalmente, la base combina almizcle blanco, vainilla y ámbar, ofreciendo una estela cálida y envolvente que perdura en la piel.',
    image: 'bhararakinggold.webp',
    notes: {
      top: 'naranja dulce, bergamota, limón',
      middle: 'frutas rojas, coco',
      base: 'almizcle blanco, vainilla, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 15
  },
  {
    house: 'Bharara',
    name: 'Rohit Azure',
    description:
      'Esta fragancia es ideal para el uso diario y ocasiones especiales, ofreciendo una experiencia olfativa que evoluciona a lo largo del día, desde una apertura vibrante hasta una base reconfortante.',
    image: 'bharararohit.jpg',
    notes: {
      top: 'bergamota, mandarina, naranja dulce, limón, jengibre',
      middle: 'cognac, mimosa francesa, neroli, osmanto, jazmín blanco',
      base: 'vainilla cremosa, ámbar, sándalo, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 16
  },
  {
    house: 'Bharara',
    name: 'Rome Pour Femme',
    description:
      'Esta armoniosa fusión de notas la hace una fragancia cautivadora para la mujer moderna y segura de sí misma. Es ideal para diversas ocasiones, desde salidas casuales hasta eventos formales, y se adapta especialmente bien a las estaciones de primavera, otoño e invierno. Su duración es notable, permaneciendo en la piel entre 6 y 8 horas.',
    image: 'bharararomefemme.webp',
    notes: {
      top: 'grosella negra, pimienta rosa, bergamota',
      middle: 'jazmín',
      base: 'vainilla, cachemira, madera de guayaco'
    },

    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 17
  },
  {
    house: 'Bharara',
    name: 'Rome Pour Homme',
    description:
      'Esta composición se abre con la frescura de la lavanda, aportando un toque floral y calmante. En el corazón, la cálida vainilla añade una suavidad cremosa y dulce. La base está anclada por el carácter verde y amaderado del vetiver, proporcionando un acabado refinado y masculino.',
    image: 'bharararomehomme.webp',
    notes: {
      top: 'lavanda',
      middle: 'vainilla',
      base: 'vetiver'
    },

    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 18
  },
  {
    house: 'Bharara',
    name: 'Velvet Rose',
    description:
      'Ha sido comparada con el perfume "Yara" de Lattafa, destacando por su desempeño superior en términos de duración y proyección. Es ideal para quienes buscan una fragancia dulce y floral con un toque oriental, adecuada para diversas ocasiones y estaciones del año.',
    image: 'bhararavelvetrose.png',
    notes: {
      top: 'orquídea, heliotropo, naranja tangerina',
      middle: 'acuerdo goloso, frutas tropicales',
      base: 'vainilla, almizcle, sándalo'
    },

    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 19
  },
  {
    house: 'Burberry',
    name: 'Women',
    description:
      'Apertura fresca y aromática, seguida de un corazón floral y amaderado, y culmina con una base cálida y reconfortante.',
    image: 'burberrywomen.jpg',
    notes: {
      top: 'lavanda, bergamota, tomillo, menta',
      middle: 'geranio, sándalo, musgo, cedro',
      base: 'ámbar, haba tonka'
    },

    options: [
      { name: SizeOptions.ML5, price: 40.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 80.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 20
  },
  {
    house: 'Burberry',
    name: 'Hero EDP',
    description:
      'Apertura fresca y resinosa, seguida de un corazón cálido y especiado, y culmina con una base robusta y amaderada.',
    image: 'burberryheroedp.jpg',
    notes: {
      top: 'agujas de pino, incienso de olíbano (franquincienso)',
      middle: 'benjuí, incienso',
      base: 'cedro del Atlas, cedro del Himalaya, cedro de Virginia'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 21
  },
  {
    house: 'Carolina Herrera',
    name: '212 Men',
    description:
      'Apertura fresca y especiada, seguida de un corazón floral y aromático, y culmina con una base amaderada y almizclada que aporta profundidad y calidez a la fragancia.',
    image: '212men.png',
    notes: {
      top: 'notas verdes, toronja (pomelo), especias, bergamota, lavanda, petit grain',
      middle: 'jengibre, violeta, gardenia, salvia',
      base: 'almizcle, sándalo, incienso, vetiver, madera de gaiac, ládano'
    },

    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 22
  },
  {
    house: 'Carolina Herrera',
    name: '212 VIP Black',
    description:
      'Apertura especiada y ligeramente amarga, seguida de un corazón aromático de lavanda, y culmina con una base dulce y almizclada que aporta profundidad y sensualidad a la fragancia.',
    image: '212vipblack.jpg',
    notes: {
      top: 'absenta, anís, hinojo',
      middle: 'lavanda',
      base: 'vaina de vainilla negra, almizcle'
    },

    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 23
  },
  {
    house: 'Carolina Herrera',
    name: 'CH Men Pasión',
    description:
      'Apertura especiada y aromática, seguida de un corazón floral y amaderado, y culmina con una base cálida y profunda que aporta sofisticación y elegancia a la fragancia.',
    image: 'chmenpasion.jpg',
    notes: {
      top: 'incienso de olíbano (franquincienso), neroli de Túnez, pimienta rosa',
      middle: 'iris, mirra, cedro de Texas',
      base: 'sándalo australiano, vainilla Bourbon, haba tonka, notas amaderadas oscuras, Amberwood'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 24
  },
  {
    house: 'Clinique',
    name: 'Happy For Men',
    description:
      'Apertura fresca y cítrica, seguida de un corazón floral suave, y culmina con una base amaderada y almizclada que aporta profundidad y calidez a la fragancia.',
    image: 'cliniqueformen.webp',
    notes: {
      top: 'mandarina, lima, notas marinas, limón, notas verdes',
      middle: 'fresia, jazmín, lirio de los valles, rosa',
      base: 'ciprés, cedro, almizcle, madera de gaiac'
    },

    options: [
      { name: SizeOptions.ML5, price: 40.0, status: ItemStatus.SoldOut },
      { name: SizeOptions.ML10, price: 80.0, status: ItemStatus.SoldOut }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 25
  },
  {
    house: 'Dolce & Gabbana',
    name: 'Light Blue',
    description:
      'Apertura fresca y afrutada, seguida de un corazón floral delicado, y culmina con una base amaderada y almizclada que aporta profundidad y calidez a la fragancia.',
    image: 'lightbluewomen.jpg',
    notes: {
      top: 'limón siciliano, manzana, cedro, campanilla',
      middle: 'bambú, jazmín, rosa blanca',
      base: 'cedro, almizcle, ámbar'
    },

    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 26
  },
  {
    house: 'Dolce & Gabbana',
    name: 'The One Men EDP',
    description:
      'Una fragancia cálida y elegante que combina frescura y especias con un fondo amaderado profundo, ideal para el hombre carismático y seguro de sí mismo.',
    image: 'theonemendp.jpg',
    notes: {
      top: 'toronja (pomelo), cilantro, albahaca',
      middle: 'jengibre, cardamomo, flor de azahar del naranjo',
      base: 'ámbar, tabaco, cedro'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 27
  },
  {
    house: 'Dolce & Gabbana',
    name: 'The One Women EDP',
    description:
      'Una fragancia floral oriental que combina notas frutales contemporáneas con flores blancas clásicas, reflejando la feminidad y elegancia de la mujer moderna.',
    image: 'theonewomenedp.webp',
    notes: {
      top: 'lichi, mandarina, durazno (melocotón), bergamota',
      middle: 'azucena, ciruela, jazmín, lirio de los valles (muguete)',
      base: 'ámbar, almizcle, vainilla, vetiver'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 28
  },
  {
    house: 'Elizabeth Arden',
    name: 'My Fifth Avenue',
    description:
      'Una fragancia floral vigorizante que combina notas cítricas, almizcles y maderas, capturando la energía y las posibilidades ilimitadas de la emblemática Quinta Avenida de Nueva York.',
    image: 'Myfifthavenu.jpg',
    notes: {
      top: 'limón, mandarina, notas ozónicas, hojas de violeta',
      middle: 'flor de loto, jazmín',
      base: 'almizcles, maderas de ámbar, raíz de lirio, cedro'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 29
  },
  {
    house: 'Giorgio Armani',
    name: 'Acqua di Giò Parfum',
    description:
      'Una fragancia masculina que combina la frescura del mar con notas amaderadas y aromáticas, capturando la esencia de la naturaleza y la elegancia contemporánea.',
    image: 'giorgioarmaniacquadigioparfum.webp',
    notes: {
      top: 'notas marinas, bergamota',
      middle: 'romero, esclarea, geranio',
      base: 'incienso de olíbano, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 30
  },
  {
    house: 'Giorgio Armani',
    name: 'Acqua di Giò Profondo Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Acuática, lanzada en 2020. Combina notas marinas frescas en la salida, seguidas por un corazón de esencias aromáticas, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma profundo y sofisticado.',
    image: 'giorgioarmaniacquadigioprofondoedp.jpg',
    notes: {
      top: 'notas marinas, aquozone, bergamota, mandarina verde',
      middle: 'romero, lavanda, ciprés, lentisco',
      base: 'almizcle, pachulí, ámbar mineral'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 31
  },
  {
    house: 'Giorgio Armani',
    name: 'Stronger With You Intensely',
    description:
      'Una fragancia masculina intensa y envolvente que combina notas especiadas, dulces y amaderadas, reflejando una pasión profunda y una conexión inquebrantable.',
    image: 'giorgioarmanistrongerwithyouintensely.webp',
    notes: {
      top: 'pimienta rosa, enebro de Virginia, violeta',
      middle: 'tófe, canela, lavanda, salvia',
      base: 'vainilla, ámbar, haba tonka, gamuza'
    },
    options: [
      { name: SizeOptions.ML5, price: 100.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 200.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 32
  },
  {
    house: 'Givenchy',
    name: 'Gentleman Society Extrême',
    description:
      'Una fragancia masculina audaz que combina notas especiadas, florales y amaderadas, diseñada para el caballero moderno que desafía los límites en busca de la excelencia.',
    image: 'givenchygentlemansocietyextreme.jpg',
    notes: {
      top: 'nuez moscada, menta picante, esclarea',
      middle: 'café, raíz de lirio, narciso francés, vetiver de Madagascar, vetiver de Haití',
      base: 'vainilla de Madagascar, sándalo australiano, cedro del Himalaya'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 33
  },
  {
    house: 'Givenchy',
    name: 'Irresistible Eau de Parfum',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en 2020 y creada por los perfumistas Fanny Bal, Dominique Ropion y Anne Flipo. Combina notas frescas y afrutadas en la salida, seguidas por un corazón floral, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma encantador y sofisticado.',
    image: 'givenchyirresistible.jpg',
    notes: {
      top: 'pera, almizcle ambreta',
      middle: 'rosa, iris',
      base: 'cedro de Virginia, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 34
  },
  {
    house: 'Gisada',
    name: 'Ambassador Men Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada Aromática, lanzada en 2019 y creada por el perfumista Andreas Wilhelm. Combina notas frescas y afrutadas en la salida, seguidas por un corazón especiado y floral, y culmina con un fondo amaderado y cálido, ofreciendo un aroma sofisticado y versátil.',
    image: 'gisadaambassadormen.webp',
    notes: {
      top: 'mandarina verde, manzana, cardamomo, violeta',
      middle: 'lavanda, pimienta negra, peonía, pachulí, mango',
      base: 'vetiver, ámbar, vainilla, musgo, madera de teca'
    },
    options: [
      { name: SizeOptions.ML5, price: 110.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 220.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 35
  },
  {
    house: 'Halloween',
    name: 'Man X',
    description:
      'Una fragancia masculina intrigante que fusiona notas especiadas y dulces, evocando la energía y el misterio de la noche urbana.',
    image: 'halloweenmanx.jpg',
    notes: {
      top: 'cardamomo, lavanda, limón (lima ácida)',
      middle: 'café, whisky, canela, cuero, notas minerales',
      base: 'haba tonka, ámbar, incienso'
    },
    options: [
      { name: SizeOptions.ML5, price: 40.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 80.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 36
  },
  {
    house: 'Hermès',
    name: 'H24 Herbes Vives',
    description:
      'Una fragancia masculina fresca que combina la potencia de un ramo de hierbas frescas, la textura de una granita de pera y la vivacidad de una molécula de alta tecnología, Physcool®, evocando la sensación de redescubrir la naturaleza urbana después de la lluvia.',
    image: 'hermesh24herbesvives.jpg',
    notes: {
      top: 'hierbas frescas',
      middle: 'granita de pera',
      base: 'Physcool®'
    },
    options: [
      { name: SizeOptions.ML5, price: 100.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 200.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 37
  },
  {
    house: 'Hugo Boss',
    name: 'Bottled Elixir',
    description:
      'Una fragancia amaderada y ambarina altamente concentrada que irradia confianza, diseñada para el hombre moderno que busca sofisticación y profundidad en su aroma.',
    image: 'hugobossbottledelixir.webp',
    notes: {
      top: 'incienso, cardamomo',
      middle: 'pachulí, vetiver',
      base: 'ládano, cedro'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 38
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Beau Le Parfum',
    description:
      'Una fragancia masculina que combina notas frescas y exóticas, creando un aroma seductor y sofisticado, ideal para el hombre moderno.',
    image: 'jeanpaulgaultierlebeauleparfum.jpg',
    notes: {
      top: 'piña, iris, ciprés, jengibre',
      middle: 'coco, notas amaderadas',
      base: 'haba tonka, sándalo, ámbar, ámbar gris'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 39
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Beau Paradise Garden',
    description:
      'Una fragancia masculina que fusiona notas verdes, acuáticas y amaderadas, evocando un paraíso tropical donde la frescura del coco y el higo verde se entrelazan con la calidez del sándalo.',
    image: 'jeanpaulgaultierlebeauparadisegarden.jpg',
    notes: {
      top: 'notas acuáticas, notas verdes, menta, jengibre',
      middle: 'coco, higo, sal',
      base: 'sándalo, haba tonka'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 40
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Male Elixir',
    description:
      "Una fragancia masculina intensa que reinterpreta el clásico 'Le Male' con una composición más rica y compleja, incorporando notas profundas y cálidas como miel y tabaco, creando una experiencia olfativa seductora y audaz.",
    image: 'jeanpaulgaultierlemaleelixir.webp',
    notes: {
      top: 'lavanda, menta',
      middle: 'vainilla, benjuí',
      base: 'miel, haba tonka, tabaco'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 41
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Male Le Parfum',
    description:
      "Una reinterpretación intensa y sofisticada del clásico 'Le Male', que combina notas orientales y amaderadas para ofrecer una fragancia masculina profunda y seductora.",
    image: 'jeanpaulgaultierlemaleleparfum.png',
    notes: {
      top: 'cardamomo',
      middle: 'lavanda, iris',
      base: 'vainilla, notas orientales, notas amaderadas'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 42
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Male Lover',
    description:
      'Una fragancia sensual y carnal que captura la esencia del sol y el mar, evocando la piel cálida sobre arena húmeda, refrescada por la brisa marina.',
    image: 'jeanpaulgaultierlemalelover.webp',
    notes: {
      top: 'pimienta blanca, lima dedo',
      middle: 'ámbar gris, notas marinas, almizcle',
      base: 'vainilla, notas amaderadas'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 43
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Ultra Male',
    description:
      "Una reinterpretación intensa y moderna del clásico 'Le Male', que combina notas dulces y especiadas para ofrecer una fragancia masculina seductora y poderosa.",
    image: 'jeanpaulgaultierultramale.jpg',
    notes: {
      top: 'bergamota, pera, lavanda negra, menta',
      middle: 'comino, canela, salvia esclarea, flor azteca negra',
      base: 'vainilla negra, ámbar, cedro, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 44
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Ace',
    description:
      'Una fragancia unisex que abre con un vibrante zest de limón y flor de azahar, pasa a un corazón especiado, y se asienta en una cálida base de sándalo, almizcle y ámbar, ofreciendo un aroma versátil para cualquier ocasión.',
    image: 'jomilanogosace.webp',
    notes: {
      top: 'zest de limón, flor de azahar',
      middle: 'especias',
      base: 'sándalo, almizcle, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 45
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Bid',
    description:
      'Una fragancia unisex que combina notas especiadas y florales, ofreciendo una experiencia olfativa sofisticada y envolvente, ideal para quienes buscan un aroma distintivo y elegante.',
    image: 'jomilanogosbid.png',
    notes: {
      top: 'cardamomo, iris, violeta, ambroxan',
      middle: 'almizcle',
      base: 'madera de sándalo, madera de cedro'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 46
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Diamond',
    description:
      'Una fragancia unisex que combina notas especiadas, cítricas y amaderadas, creando un aroma equilibrado y seductor, ideal para quienes buscan distinción y refinamiento.',
    image: 'jomilanogosdiamond.webp',
    notes: {
      top: 'especias, naranja sanguina, pimienta negra',
      middle: 'lavanda, flor de azahar',
      base: 'notas amaderadas, musgo, sándalo blanco, haba tonka, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 47
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Full House',
    description:
      'Una fragancia unisex de la familia olfativa Ámbar Especiada, combina notas cítricas frescas, un corazón especiado y floral, y un fondo amaderado y cálido, ideal para ocasiones versátiles.',
    image: 'jomilanofullhouse.webp',
    notes: {
      top: 'bergamota de Calabria, naranja de Sicilia, cidra de Sicilia',
      middle: 'neroli tunecino, jengibre nigeriano, canela de Ceilán',
      base: 'té negro chino, madera de guayaco, olíbano, ambroxan'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 48
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades High Roller',
    description:
      'Una fragancia unisex que se abre con una mezcla refrescante de pomelo, bergamota y grosella negra, seguida de un corazón cálido de jengibre, canela, cidra y cardamomo, y culmina con notas de fondo de pimienta rosa y pachulí, aportando profundidad y riqueza al aroma.',
    image: 'jomilanogoshigherroller.jpg',
    notes: {
      top: 'pomelo, bergamota, grosella negra',
      middle: 'jengibre, canela, cidra, cardamomo',
      base: 'pimienta rosa, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 49
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Jackpot',
    description:
      'Una fragancia unisex que se abre con notas cítricas y de bergamota, evoluciona hacia un corazón afrutado y dulce, y culmina en una base cálida de ámbar, almizcle y vainilla, ofreciendo un aroma equilibrado y sofisticado.',
    image: 'jomilanogosjackpot.png',
    notes: {
      top: 'cítricos, bergamota',
      middle: 'notas frutales dulces',
      base: 'ámbar, almizcle, vainilla'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 50
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades King',
    description:
      'Una fragancia unisex que se abre con una explosión cítrica de naranja, limón y bergamota, seguida de un corazón afrutado, y culmina en una base cálida y suave de ámbar, vainilla de Madagascar y almizcle blanco, ofreciendo un aroma equilibrado y sofisticado.',
    image: 'jomilanogosking.jpg',
    notes: {
      top: 'naranja, limón, bergamota',
      middle: 'frutas',
      base: 'ámbar, vainilla de Madagascar, almizcle blanco'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 51
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Moon',
    description:
      'Una fragancia unisex que combina notas florales de gardenia, clavel y jazmín, enriquecidas con un corazón de pachulí, flores, notas marinas y sándalo, y una base dulce de caramelo y café, creando un aroma hipnótico y seductor inspirado en las noches mágicas de Nueva York.',
    image: 'jomilanogosmoon.webp',
    notes: {
      top: 'gardenia, clavel, jazmín',
      middle: 'pachulí, flores, notas marinas, sándalo',
      base: 'caramelo, café'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 52
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Rouge Extrait',
    description:
      'Una fragancia unisex que combina notas florales y amaderadas, ofreciendo un aroma sofisticado y envolvente, ideal para quienes buscan distinción y elegancia.',
    image: 'jomilanogosrougeextrait.jpg',
    notes: {
      top: 'jazmín, lavanda, bergamota',
      middle: 'amberwood, ámbar gris',
      base: 'notas amaderadas, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 53
  },
  {
    house: 'Lancôme',
    name: 'La Vie Est Belle Rose Extraordinaire',
    description:
      'Una reinterpretación moderna de la flor icónica de Lancôme, que combina el Concreto de Iris con tres extractos preciosos de rosa: agua fresca de rosa, absoluto de rosa damascena y un acorde de rosa espacial. Su corazón floral se realza con matices de almizcle amaderado, aportando profundidad y modernidad a la fragancia.',
    image: 'lancomelavieestbelleroseextraordinaire.jpg',
    notes: {
      top: 'bergamota, naranja, acorde de tallo verde',
      middle: 'concreto de iris, agua de rosa, absoluto de rosa damascena, acorde de rosa espacial',
      base: 'almizcle, ambroxan, sándalo, musgo, notas amaderadas'
    },
    options: [
      { name: SizeOptions.ML5, price: 100.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 200.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 54
  },
  {
    house: 'Lattafa',
    name: 'Asad',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar, lanzada en 2021. Combina notas especiadas y dulces, ofreciendo un aroma sofisticado y duradero que refleja poder y elegancia.',
    image: 'lattafaasad.webp',
    notes: {
      top: 'pimienta negra, tabaco, piña',
      middle: 'pachulí, café, iris',
      base: 'vainilla, ámbar, madera seca, benjuí, ládano'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 55
  },
  {
    house: 'Lattafa',
    name: 'Asad Zanzibar',
    description:
      'Una fragancia masculina que combina notas especiadas y frescas, evocando la esencia exótica de Zanzíbar. Lanzada en 2024, esta Eau de Parfum ofrece una experiencia olfativa única y duradera.',
    image: 'lattafaasadzanzibar.webp',
    notes: {
      top: 'pimienta negra, lavanda marina',
      middle: 'agua de coco salada, iris',
      base: 'vainilla, incienso'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 56
  },
  {
    house: 'Lattafa',
    name: 'Eclaire',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal Gourmand, lanzada en 2024. Combina notas dulces y cremosas que evocan la indulgencia de un postre gourmet, ofreciendo un aroma delicioso y envolvente.',
    image: 'lattafaeclaireedp.jpg',
    notes: {
      top: 'caramelo, leche, azúcar',
      middle: 'miel, flores blancas',
      base: 'vainilla, praliné, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 57
  },
  {
    house: 'Lattafa',
    name: 'Haya',
    description:
      'Una fragancia femenina que combina notas frutales y florales, ofreciendo un aroma dulce y sofisticado, ideal para mujeres que buscan destacar con elegancia.',
    image: 'lattafahayaedp.webp',
    notes: {
      top: 'champaña, fresa, naranja tangerina, naranja sanguina, rosa',
      middle: 'gardenia, jazmín, orquídea de vainilla',
      base: 'ámbar, sándalo, castaña'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 58
  },
  {
    house: 'Lattafa',
    name: 'Her Confession',
    description:
      'Una fragancia femenina que equilibra calidez, misterio y elegancia. Se abre con una cautivadora mezcla de canela y acordes místicos, evolucionando hacia un corazón floral de jazmín, nardo e incienso, y culmina con una base sensual de vainilla, haba tonka y almizcle. Ideal para la mujer moderna que irradia confianza y encanto.',
    image: 'lattafaherconfession.webp',
    notes: {
      top: 'acorde místico, canela',
      middle: 'jazmín, nardo, incienso, mahonial',
      base: 'vainilla, haba tonka, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 59
  },
  {
    house: 'Lattafa',
    name: 'His Confession',
    description:
      'Una fragancia masculina de la familia olfativa Oriental Amaderada, lanzada en 2024. Combina notas especiadas y amaderadas, ofreciendo un aroma sofisticado y duradero que refleja confianza y elegancia.',
    image: 'lattafahisconfession.jpg',
    notes: {
      top: 'canela, lavanda, mandarina',
      middle: 'iris, benjuí, ciprés, mahonial',
      base: 'vainilla, haba tonka, ámbar, cedro, incienso, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 60
  },
  {
    house: 'Lattafa',
    name: 'Badee Al Oud Honor & Glory',
    description:
      'Una fragancia unisex de la familia olfativa Ámbar Afrutada, lanzada en 2023. Combina notas dulces y especiadas, ofreciendo un aroma sofisticado y duradero que refleja lujo y elegancia.',
    image: 'lattafahonoryglory.jpeg',
    notes: {
      top: 'piña, créme brûlée',
      middle: 'canela, benjuí, cúrcuma (azafrán de la India), pimienta negra',
      base: 'vainilla, cachemira, sándalo, musgo'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 61
  },
  {
    house: 'Lattafa',
    name: 'Khamrah',
    description:
      'Una fragancia unisex de la familia olfativa Aromática Especiada, lanzada en 2022. Combina notas cálidas y dulces, ofreciendo un aroma sofisticado y envolvente que refleja lujo y elegancia.',
    image: 'lattafakhamrah.jpg',
    notes: {
      top: 'canela, nuez moscada, bergamota',
      middle: 'dátiles, praliné, nardos, mahonial',
      base: 'vainilla, haba tonka, benjuí, mirra, amberwood, akigalawood'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 62
  },
  {
    house: 'Lattafa',
    name: 'Khamrah Qahwa',
    description:
      'Una fragancia unisex de la familia olfativa Ámbar Vainilla, lanzada en 2023. Combina notas especiadas y dulces, ofreciendo un aroma cálido y envolvente que evoca la esencia del café árabe.',
    image: 'lattafakhamrahqahwa.jpg',
    notes: {
      top: 'canela, cardamomo, jengibre',
      middle: 'praliné, frutas confitadas, flores blancas',
      base: 'café, vainilla, haba tonka, benjuí, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 63
  },
  {
    house: 'Lattafa',
    name: 'Mayar for Women',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en 2022. Combina notas dulces y florales, ofreciendo un aroma elegante y sofisticado, ideal para mujeres que buscan destacar con sutileza y encanto.',
    image: 'lattafamayarforwomen.jpg',
    notes: {
      top: 'frambuesa, lichi, hoja de violeta',
      middle: 'peonía, rosa blanca, jazmín',
      base: 'vainilla, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 64
  },
  {
    house: 'Lattafa',
    name: 'Yara',
    description:
      'Una fragancia femenina de la familia olfativa Ámbar Vainilla, lanzada en 2020. Combina notas florales y frutales con un fondo dulce y amaderado, ofreciendo un aroma sofisticado y envolvente, ideal para mujeres que buscan destacar con elegancia.',
    image: 'lattafayara.webp',
    notes: {
      top: 'orquídea, heliotropo, naranja tangerina',
      middle: 'acuerdo goloso, frutas tropicales',
      base: 'vainilla, almizcle, sándalo'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.SoldOut },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.SoldOut }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 65
  },
  {
    house: 'Lattafa',
    name: 'Yara Candy',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal Gourmand, lanzada en 2024. Combina notas dulces y afrutadas, ofreciendo un aroma juvenil y encantador, ideal para mujeres que buscan una esencia alegre y deliciosa.',
    image: 'lattafayaracandy.jpg',
    notes: {
      top: 'grosellas negras, mandarina verde',
      middle: 'caramelo efervescente de fresa, gardenia',
      base: 'vainilla, ámbar, sándalo, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 66
  },
  {
    house: 'Lattafa',
    name: 'Yara Moi',
    description:
      'Una fragancia femenina de la familia olfativa Floral Dulce, lanzada en 2022. Combina notas de durazno y jazmín en la salida, seguidas por un corazón de caramelo y ámbar, y culmina con un fondo de pachulí y sándalo, ofreciendo un aroma elegante y sofisticado.',
    image: 'lattafayaramoi.webp',
    notes: {
      top: 'durazno (melocotón), jazmín',
      middle: 'caramelo, ámbar',
      base: 'pachulí, sándalo'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 67
  },
  {
    house: 'Lattafa',
    name: 'Yara Tous',
    description:
      'Una fragancia femenina de la familia olfativa Frutal Dulce, lanzada en 2023. Combina notas exóticas y cremosas, ofreciendo un aroma tropical y envolvente, ideal para mujeres que buscan una esencia fresca y encantadora.',
    image: 'lattafayaratous.jpg',
    notes: {
      top: 'mango, coco, maracuyá (fruta de la pasión)',
      middle: 'jazmín, heliotropo, flor de azahar del naranjo',
      base: 'vainilla, almizcle, cachemira'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 68
  },
  {
    house: 'Maison Alhambra',
    name: 'Jean Lowe Immortel',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar, lanzada en 2023. Combina notas cítricas y especiadas en la salida, seguidas por un corazón aromático y acuático, y culmina con un fondo ambarado y resinoso, ofreciendo un aroma sofisticado y duradero.',
    image: 'maisonalhambrajeanloweimmortel.webp',
    notes: {
      top: 'toronja (pomelo), jengibre, bergamota',
      middle: 'romero, notas acuáticas, salvia, geranio',
      base: 'ambroxan, ámbar, ládano'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 69
  },
  {
    house: 'Maison Alhambra',
    name: "L'Intrude",
    description:
      'Una fragancia femenina de la familia olfativa Floral, lanzada en 2022. Combina notas frutales y florales, ofreciendo un aroma sofisticado y envolvente, ideal para mujeres que buscan destacar con elegancia.',
    image: 'maisonalhambralIntrude.webp',
    notes: {
      top: 'pera, bergamota',
      middle: 'nardos, flor de azahar del naranjo, jazmín sambac',
      base: 'ambroxan, pachulí, vainilla, vetiver'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 70
  },
  {
    house: 'Montblanc',
    name: 'Explorer',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada Aromática, lanzada en 2019. Combina notas frescas y especiadas en la salida, seguidas por un corazón de vetiver y cuero, y culmina con un fondo de pachulí, cacao y ambroxan, ofreciendo un aroma sofisticado y aventurero.',
    image: 'montblancexplorer.jpg',
    notes: {
      top: 'bergamota, pimienta rosa, esclarea',
      middle: 'vetiver de Haití, cuero',
      base: 'ambroxan, Akigalawood, hojas de pachulí de Indonesia, vaina de cacao'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 71
  },
  {
    house: 'Montblanc',
    name: 'Explorer Platinum',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada Ambarada, lanzada en 2023. Combina notas frescas y verdes en la salida, seguidas por un corazón aromático, y culmina con un fondo amaderado, ofreciendo un aroma sofisticado y aventurero.',
    image: 'montblancexplorerplatinum.webp',
    notes: {
      top: 'hojas de violeta, pomelo',
      middle: 'salvia esclarea, lavanda',
      base: 'madera de cedro, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 72
  },
  {
    house: 'Narciso Rodriguez',
    name: 'Bleu Noir Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada, lanzada en 2018. Combina notas frescas y especiadas en la salida, seguidas por un corazón de almizcle, y culmina con un fondo de cedro azul, ébano negro y vetiver, ofreciendo un aroma sofisticado y seductor.',
    image: 'narcisorodriguezbleunoiredp.jpg',
    notes: {
      top: 'bergamota, cardamomo',
      middle: 'almizcle',
      base: 'cedro azul, ébano negro, vetiver'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 73
  },
  {
    house: 'Paco Rabanne',
    name: 'Invictus Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Acuática, lanzada en 2024. Combina notas frescas y acuáticas en la salida, seguidas por un corazón de jabón negro y hojas de violeta, y culmina con un fondo de sándalo, cachemira y almizcle, ofreciendo un aroma poderoso y sofisticado.',
    image: 'pacorabanneinvictusparfum.webp',
    notes: {
      top: 'notas marinas, lavanda, pimienta rosa',
      middle: 'jabón negro, hojas de violeta, mirto',
      base: 'sándalo, cachemira, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 74
  },
  {
    house: 'Paco Rabanne',
    name: 'Phantom Intense Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar Aromática, lanzada en 2024. Combina notas frescas y especiadas en la salida, seguidas por un corazón de lavanda y ron, y culmina con un fondo de vainilla, cedro y musgo, ofreciendo un aroma intenso y seductor.',
    image: 'pacorabannephantomedpintense.webp',
    notes: {
      top: 'flor de azahar del naranjo escarchada, limón, cardamomo',
      middle: 'lavanda, salvia esclarea, ron',
      base: 'vainilla, cedro, musgo'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 75
  },
  {
    house: 'Ralph Lauren',
    name: 'Ralph',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en el año 2000. Combina notas frescas y afrutadas en la salida, seguidas por un corazón floral, y culmina con un fondo almizclado, ofreciendo un aroma juvenil y vibrante.',
    image: 'ralphlaurenralph.jpg',
    notes: {
      top: 'hojas de manzano, mandarina italiana, fresia amarilla',
      middle: 'osmanthus japonés, magnolia, flor de tilo, boronia',
      base: 'almizcle, iris blanco'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 76
  },
  {
    house: 'Rasasi',
    name: 'Hawas Black',
    description:
      'Una fragancia masculina de la familia olfativa Aromática, lanzada en 2024. Combina notas frescas y afrutadas en la salida, seguidas por un corazón amaderado y floral, y culmina con un fondo de musgo de roble, ámbar y notas amaderadas, ofreciendo un aroma sofisticado y enérgico.',
    image: 'rasasihawasblack.webp',
    notes: {
      top: 'piña, toronja (pomelo), bergamota',
      middle: 'cedro, jazmín, pachulí',
      base: 'musgo de roble, ámbar, notas amaderadas'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 77
  },
  {
    house: 'Rasasi',
    name: 'Hawas For Him',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Acuática, lanzada en 2015. Combina notas frescas y afrutadas en la salida, seguidas por un corazón acuático y especiado, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma versátil y vibrante.',
    image: 'rasasihawasforhim.webp',
    notes: {
      top: 'manzana, bergamota, limón (lima ácida), canela',
      middle: 'notas acuosas, ciruela, flor de azahar del naranjo, cardamomo',
      base: 'ámbar gris, almizcle, trozos de madera a la deriva, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 78
  },
  {
    house: 'Rasasi',
    name: 'Hawas Ice',
    description:
      'Una fragancia masculina de la familia olfativa Aromática, lanzada en 2023. Combina notas cítricas y afrutadas en la salida, seguidas por un corazón especiado y floral, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma fresco y vibrante.',
    image: 'rasasihawasice.webp',
    notes: {
      top: 'manzana, bergamota italiana, limón siciliano, anís estrellado',
      middle: 'flor de azahar del naranjo, ciruela, cardamomo',
      base: 'musgo, madera flotante, ámbar, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 79
  },
  {
    house: 'Rasasi',
    name: 'Hawas Pour Femme',
    description:
      'Una fragancia femenina de la familia olfativa Floral, lanzada en 2015. Combina notas afrutadas en la salida, seguidas por un corazón floral y cítrico, y culmina con un fondo dulce y terroso, ofreciendo un aroma sofisticado y encantador.',
    image: 'rasasihawaspourfemme.jpg',
    notes: {
      top: 'manzana, granada, toronja (pomelo)',
      middle: 'iris, jazmín sambac (sampaguita), cítricos',
      base: 'praliné, pachulí, vetiver'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 80
  },
  {
    house: 'Tommy Hilfiger',
    name: 'Tommy Girl Eau de Toilette',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en 1996 y creada por la perfumista Calice Becker. Combina notas frescas y afrutadas en la salida, seguidas por un corazón floral y cítrico, y culmina con un fondo amaderado y ligeramente especiado, ofreciendo un aroma juvenil y vibrante.',
    image: 'tommyhilfigertommygirledt.webp',
    notes: {
      top: 'flor de manzano, camelia, mandarina, grosellas negras',
      middle: 'limón (lima ácida), madreselva, rosa, toronja (pomelo), azucena, menta, violeta',
      base: 'magnolia, jazmín, cedro, sándalo, cuero'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 81
  },
  {
    house: 'Versace',
    name: 'Crystal Noir Eau de Toilette',
    description:
      'Una fragancia femenina de la familia olfativa Oriental Floral, lanzada en 2004 y creada por el perfumista Antoine Lie. Combina notas especiadas en la salida, seguidas por un corazón floral y exótico, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma seductor y elegante.',
    image: 'versacecrystalnoiredt.jpg',
    notes: {
      top: 'jengibre, cardamomo, pimienta',
      middle: 'flor de azahar del naranjo, peonía, gardenia, coco',
      base: 'sándalo, almizcle, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 82
  },
  {
    house: 'Versace',
    name: 'Eros Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar Amaderada, lanzada en 2020. Combina notas frescas y cítricas en la salida, seguidas por un corazón aromático y especiado, y culmina con un fondo amaderado y dulce, ofreciendo un aroma intenso y seductor.',
    image: 'Versaceerosedp.webp',
    notes: {
      top: 'menta, manzana acaramelada, limón (lima ácida), mandarina',
      middle: 'ambroxan, geranio, salvia esclarea',
      base: 'vainilla, cedro, sándalo, pachulí, naranja amarga, cuero'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 83
  },
  {
    house: 'Versace',
    name: 'Eros Energy',
    description:
      'Una fragancia masculina de la familia olfativa Cítrica Aromática, lanzada en 2024. Combina notas cítricas vibrantes en la salida, seguidas por un corazón especiado y afrutado, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma fresco y enérgico.',
    image: 'Versaceerosenergy.png',
    notes: {
      top: 'bergamota italiana, naranja sanguina, lima, mandarina verde, toronja, limón',
      middle: 'pimienta rosa, grosella negra, ámbar blanco',
      base: 'pachulí de Indonesia, almizcle, musgo de roble'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 84
  },
  {
    house: 'Versace',
    name: 'Eros Flame',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada Especiada, lanzada en 2018. Combina notas cítricas y especiadas en la salida, seguidas por un corazón floral y especiado, y culmina con un fondo amaderado y dulce, ofreciendo un aroma intenso y apasionado.',
    image: 'versaceerosFlame.jpg',
    notes: {
      top: 'mandarina, pimienta negra, limón (lima ácida), chinotto, romero',
      middle: 'geranio, rosa, Pepperwood™',
      base: 'vainilla, haba tonka, sándalo, cedro de Texas, pachulí, musgo de roble'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 85
  },
  {
    house: 'Versace',
    name: 'Oud Noir',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar Amaderada, lanzada en 2013. Combina notas especiadas y cítricas en la salida, seguidas por un corazón cálido y exótico, y culmina con un fondo amaderado y terroso, ofreciendo un aroma intenso y sofisticado.',
    image: 'versaceoudnoir.jpg',
    notes: {
      top: 'pimienta negra, naranja amarga, neroli',
      middle: 'azafrán, cardamomo, incienso de olíbano (franquincienso)',
      base: 'madera de oud, pachulí, Leatherwood'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 86
  },
  {
    house: 'Versace',
    name: 'Pour Femme Dylan Purple',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en 2022. Combina notas cítricas y afrutadas en la salida, seguidas por un corazón floral vibrante, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma brillante y elegante.',
    image: 'versacepourfemmedylanpurpleedp.jpg',
    notes: {
      top: 'pera, naranja amarga, bergamota',
      middle: 'fresia, Pomarose, Mahonial',
      base: 'ambroxan, Iso E Super, Sylkolide, cedro de Virginia, Árbol de Belambra'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 87
  },
  {
    house: 'Versace',
    name: 'Pour Homme',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Fougère, lanzada en 2008 y creada por el perfumista Alberto Morillas. Combina notas cítricas y florales en la salida, seguidas por un corazón aromático y amaderado, y culmina con un fondo cálido y almizclado, ofreciendo un aroma fresco y elegante.',
    image: 'versacepourhomme.jpg',
    notes: {
      top: 'limón (lima ácida), bergamota, neroli, rosa de Mai',
      middle: 'jacinto, esclarea, cedro, geranio',
      base: 'haba tonka, almizcle, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 88
  },
  {
    house: 'Versace',
    name: 'Versense ',
    description:
      'Una fragancia femenina de la familia olfativa Almizcle Amaderado Floral, lanzada en 2009. Combina notas cítricas y afrutadas en la salida, seguidas por un corazón floral especiado, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma fresco y energizante.',
    image: 'versaceversense.png',
    notes: {
      top: 'bergamota, higo, mandarina verde, cítricos, pera',
      middle: 'azucena, jazmín, cardamomo, narciso',
      base: 'sándalo, cedro de Virginia, olivo, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 89
  },

  {
    house: 'Xerjoff',
    name: '1861 Naxos',
    description:
      'Una fragancia unisex de la familia olfativa Aromática Especiada, lanzada en 2015. Combina notas cítricas y aromáticas en la salida, seguidas por un corazón dulce y especiado, y culmina con un fondo cálido y amaderado, ofreciendo un aroma sofisticado y envolvente.',
    image: 'xerjoff1861naxos.jpg',
    notes: {
      top: 'lavanda, bergamota, limón (lima ácida)',
      middle: 'miel, canela, cachemira, jazmín sambac',
      base: 'hojas de tabaco, vainilla, haba tonka'
    },
    options: [
      { name: SizeOptions.ML5, price: 180.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 360.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 90
  },
  {
    house: 'Xerjoff',
    name: 'Erba Pura Eau de Parfum',
    description:
      'Una fragancia unisex de la familia olfativa Ámbar, lanzada en 2019. Combina notas cítricas y afrutadas en la salida, seguidas por un corazón de frutas exóticas, y culmina con un fondo de almizcle blanco, vainilla de Madagascar y ámbar, ofreciendo un aroma vibrante y sofisticado.',
    image: 'xerjofferbapura.jpg',
    notes: {
      top: 'naranja siciliana, bergamota de Calabria, limón siciliano',
      middle: 'frutas exóticas',
      base: 'almizcle blanco, vainilla de Madagascar, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 160.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 320.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined,
    id: 91
  },
  {
    house: 'Yves Saint Laurent',
    name: 'Libre Eau de Parfum',
    description:
      'Una fragancia femenina de la familia olfativa Ámbar Fougère, lanzada en 2019 y creada por los perfumistas Anne Flipo y Carlos Benaim. Combina notas cítricas y florales en la salida, seguidas por un corazón floral y aromático, y culmina con un fondo cálido y amaderado, ofreciendo un aroma elegante y contemporáneo.',
    image: 'yvessaintlaurentlilbreedp.webp',
    notes: {
      top: 'lavanda, mandarina, grosellas negras, petit grain',
      middle: 'lavanda, flor de azahar del naranjo, jazmín',
      base: 'vainilla de Madagascar, almizcle, cedro, ámbar gris'
    },
    options: [
      { name: SizeOptions.ML5, price: 100.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 200.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined,
    id: 92
  },
  {
    house: 'Yves Saint Laurent',
    name: 'MYSLF Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Floral Amaderada, lanzada en 2023. Combina notas cítricas y frescas en la salida, seguidas por un corazón floral vibrante, y culmina con un fondo amaderado y sensual, ofreciendo un aroma moderno y versátil.',
    image: 'yvessaintlaurentmyslfedp.webp',
    notes: {
      top: 'bergamota de Calabria, vert de bergamota',
      middle: 'flor de naranjo de Túnez',
      base: 'Ambrofix™, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 93
  },
  {
    house: 'Yves Saint Laurent',
    name: 'Y Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Fougère, lanzada en 2018 y creada por el perfumista Dominique Ropion. Combina notas frescas y afrutadas en la salida, seguidas por un corazón herbal y floral, y culmina con un fondo amaderado y especiado, ofreciendo un aroma moderno y sofisticado.',
    image: 'yvessaintlaurentyedp.webp',
    notes: {
      top: 'manzana, jengibre, bergamota',
      middle: 'salvia, bayas de enebro, geranio',
      base: 'amberwood, haba tonka, cedro, vetiver, incienso de olíbano'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined,
    id: 94
  },
  {
    id: 95,
    house: 'Lattafa',
    name: 'Fakhar Rose',
    description:
      'Una fragancia femenina de la familia olfativa Floral, lanzada en 2021. Combina notas frutales y florales en la salida, un corazón rico en flores blancas, y culmina con una base cálida y almizclada, ofreciendo un aroma sofisticado y envolvente.',
    image: 'lattafafakhar.jpg',
    notes: {
      top: 'frutas, azucena, granada, aldehídos',
      middle: 'nardos, jazmín, gardenia, ylang-ylang, madreselva, rosa, peonía',
      base: 'vainilla, almizcle blanco, sándalo, ambroxan'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 96,
    house: 'Grandeur',
    name: 'Aura Pink',
    description:
      'Una fragancia femenina de la familia olfativa Oriental Floral. Combina notas frutales en la salida, un corazón floral seductor y una base cálida y ambarada, ofreciendo un aroma encantador y sofisticado.',
    image: 'grandeur_pink_aura.avif',
    notes: {
      top: 'frambuesa, lichi, grosella negra',
      middle: 'rosa, magnolia, benjuí',
      base: 'ámbar, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 97,
    house: 'Grandeur',
    name: 'Aura Pour Femme',
    description:
      'Una fragancia femenina de la familia olfativa Ámbar Amaderada, que combina notas florales y amaderadas para ofrecer un aroma encantador y sofisticado.',
    image: 'grandeur_aura_pour_femme.jpg',
    notes: {
      top: 'violeta',
      middle: 'peonía, jazmín',
      base: 'sándalo, cachemira, vainilla'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 98,
    house: 'Maison Alhambra',
    name: 'Jean Lowe Matière',
    description:
      'Inspirada en Matière Noire de Louis Vuitton, esta fragancia ofrece una experiencia olfativa rica y envolvente. Las notas de salida presentan un acorde dulce de jarabe de grosella negra y notas acuáticas, que aportan frescura y vitalidad. En el corazón, un bouquet floral compuesto por rosa, ciclamen, narciso y jazmín sambac añade profundidad y elegancia. La base combina la calidez del oud, el pachulí y el incienso, brindando una estela duradera y sofisticada.',
    image: 'maison_alhambra_jean_lowe_matiere.jpg',
    notes: {
      top: 'jarabe de grosella negra, notas acuáticas',
      middle: 'rosa, ciclamen, narciso, jazmín sambac',
      base: 'madera de oud, pachulí, incienso'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 99,
    house: 'Bharara',
    name: 'Rohit Delicate',
    description:
      'Ofrece una deliciosa sinfonía de notas exóticas y dulces. La fragancia se abre con el aroma vibrante y jugoso de la mandarina, acompañado de una mezcla de frutas tropicales que te transportan instantáneamente a un paraíso exuberante. En el corazón, florece con el encanto embriagador de la orquídea y el heliotropo, añadiendo una riqueza floral que es a la vez delicada y cautivadora. La faceta gourmand emerge con el delicioso aroma del postre de frutos rojos, que se mezcla perfectamente con la cremosa vainilla para crear una dulzura deliciosa. A medida que la fragancia se seca, revela una base cálida y sensual de almizcle y sándalo, dejando una impresión duradera que es a la vez reconfortante y sofisticada.',
    image: 'bharara_rohit_delicate.jpg',
    notes: {
      top: 'mandarina, frutas tropicales',
      middle: 'orquídea, heliotropo',
      base: 'postre de frutos rojos, vainilla, almizcle, sándalo'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 100,
    house: 'Maison Alhambra',
    name: 'Glossy',
    description:
      'Esta fragancia combina notas frutales y especiadas en la salida, un corazón floral de jazmín y rosa, y una base cálida de vainilla, almizcle blanco, pachulí y cedro, creando un aroma sofisticado y envolvente.',
    image: 'maison_alhambra_glossy.jpg',
    notes: {
      top: 'pera, pimienta rosa, bergamota',
      middle: 'jazmín, rosa',
      base: 'vainilla, almizcle blanco, pachulí, cedro'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 101,
    house: 'Lattafa',
    name: 'Tharwah Silver',
    description:
      'Esta fragancia se abre con notas frescas de menta y bergamota, que aportan una sensación revitalizante. En el corazón, la lavanda y la salvia aportan un toque aromático y herbal, brindando profundidad y carácter. La base combina almizcle, vetiver y cedro, ofreciendo un fondo cálido y amaderado que equilibra la frescura inicial.',
    image: 'lattafa_tharwah_silver.jpg',
    notes: {
      top: 'menta, bergamota',
      middle: 'lavanda, salvia esclarea',
      base: 'almizcle, vetiver, cedro'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 102,
    house: 'Grandeur',
    name: 'Elite Florist',
    description:
      'Fragancia femenina que captura la esencia de un jardín en plena floración. Se abre con la frescura vibrante de la peonía, que aporta una nota inicial ligera y aireada. En el corazón, la rosa y el osmanthus se entrelazan, ofreciendo un bouquet floral rico y sofisticado. La base de sándalo añade profundidad y calidez, creando un aroma equilibrado que es tanto elegante como acogedor. Esta fragancia es ideal para mujeres modernas que buscan un perfume que combine frescura floral con una base amaderada suave, perfecto para el uso diario o eventos especiales.',
    image: 'grandeur_elite_florist.jpg',
    notes: {
      top: 'peonía',
      middle: 'rosa, osmanthus',
      base: 'sándalo'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 103,
    house: 'Lattafa',
    name: 'Badee Al Oud Noble Blush',
    description:
      'Fragancia que evoca una fantasía dulce y soñadora. Se abre con una nota de salida de leche de rosas, que aporta una suavidad floral y cremosa. En el corazón, el merengue y la almendra se combinan para ofrecer una dulzura gourmand irresistible. La base de vainilla, sándalo y almizcle proporciona calidez y profundidad, dejando una estela aterciopelada y envolvente.',
    image: 'lattafa_badee_al_oud_noble_blush.webp',
    notes: {
      top: 'leche de rosas',
      middle: 'merengue, almendra',
      base: 'vainilla, sándalo, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 104,
    house: 'Amaran',
    name: 'Voca Celebrity',
    description:
      'Diseñado para mujeres que abrazan su fuerza, gracia y la belleza de ser auténticamente ellas mismas, esta fragancia se abre con notas de salida de jazmín sambac, aportando una frescura floral intensa. En el corazón, el cashmeran y la rosa turca añaden una riqueza y profundidad aterciopelada. La base de vainilla y ámbar proporciona una calidez duradera, envolviendo los sentidos en una estela sofisticada y elegante.',
    image: 'amaran_voca_celebrity.webp',
    notes: {
      top: 'jazmín sambac',
      middle: 'cashmeran, rosa turca',
      base: 'vainilla, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 105,
    house: 'Amaran',
    name: 'Voca Pink',
    description:
      'Diseñado para aquellas que combinan suavidad con fortaleza y elegancia con audacia, este perfume se abre con notas de manzana Pink Lady y jazmín, ofreciendo una frescura frutal y floral. En el corazón, las notas de chicle y caramelo aportan una dulzura juguetona y juvenil. La base de ámbar, haba tonka y sándalo proporciona calidez y profundidad, dejando una estela envolvente y sofisticada.',
    image: 'amaran_voca_pink.webp',
    notes: {
      top: 'manzana Pink Lady, jazmín',
      middle: 'chicle, caramelo',
      base: 'ámbar, haba tonka, sándalo'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 106,
    house: 'Amaran',
    name: 'Voca Touch',
    description:
      'Esta fragancia se abre con notas vibrantes de fresa, bergamota y almendra amarga, que aportan una frescura afrutada y ligeramente dulce. En el corazón, la peonía y el ylang-ylang se entrelazan para ofrecer un bouquet floral sofisticado y femenino. La base combina la calidez de la vainilla, el haba tonka y la cumarina, proporcionando una estela duradera y envolvente que deja una impresión memorable.',
    image: 'amaran_voca_touch.webp',
    notes: {
      top: 'fresa, bergamota, almendra amarga',
      middle: 'peonía, ylang-ylang',
      base: 'vainilla, haba tonka, cumarina'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 107,
    house: 'Dumont',
    name: 'Nitro Red',
    description:
      'Nitro Red de Dumont es una fragancia de la familia olfativa Aromática Frutal para hombres, lanzada en 2020. Esta fragancia se abre con notas frescas de manzana, lavanda y bergamota, que aportan una sensación revitalizante. En el corazón, la sandía, el cedro y el cálamo aromático se combinan para ofrecer un toque acuático y amaderado. La base está compuesta por ámbar, sándalo y pachulí, proporcionando una calidez duradera y una profundidad sofisticada.',
    image: 'dumont_nitro_red.webp',
    notes: {
      top: 'manzana, lavanda, bergamota',
      middle: 'sandía, cedro, cálamo aromático',
      base: 'ámbar, sándalo, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 108,
    house: 'Lattafa',
    name: 'Vintage Radio',
    description:
      'Vintage Radio de Lattafa es una fragancia unisex de la familia olfativa Oriental Amaderada, lanzada en 2023. Esta fragancia nostálgica te transporta a tiempos más sencillos y elegantes, evocando la magia de sentarse junto a una radio antigua iluminada por el cálido resplandor de sus tubos. Se abre con notas de salida de lavanda, salvia y bergamota, que aportan una frescura aromática y cítrica. En el corazón, la ciruela, el palo santo y la pimienta negra se combinan para ofrecer un toque afrutado, amaderado y especiado. La base está compuesta por sándalo y madera de oud, proporcionando una calidez duradera y una profundidad sofisticada.',
    image: 'lattafa_vintage_radio.jpg',
    notes: {
      top: 'lavanda, salvia, bergamota',
      middle: 'ciruela, palo santo, pimienta negra',
      base: 'sándalo, madera de oud'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 109,
    house: 'Versace',
    name: 'Pour Femme Dylan Blue',
    description:
      'Esta esencia es un tributo a la feminidad, fuerte, sensual y refinada, creada para una mujer que conoce el poder de su sensualidad y de su mente. Se abre con notas frescas y afrutadas de grosella negra, manzana verde, trébol blanco, nomeolvides y shiso (menta púrpura). El corazón floral combina durazno (melocotón), petalia, rosa silvestre, rosa y jazmín, aportando una riqueza y profundidad aterciopelada. La base está compuesta por almizcle, maderas blancas, styrax y pachulí, proporcionando una calidez duradera y una profundidad sofisticada.',
    image: 'versace_dylan_blue_pour_femme.jpg',
    notes: {
      top: 'grosella negra, manzana verde, trébol blanco, nomeolvides, shiso (menta púrpura)',
      middle: 'durazno (melocotón), petalia, rosa silvestre, rosa, jazmín',
      base: 'almizcle, maderas blancas, styrax, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },

  {
    id: 110,
    house: 'Lancôme',
    name: "La Vie Est Belle L'Elixir",
    description:
      'Esta esencia celebra la liberación y la autoconfianza, abriendo con notas chispeantes de frambuesa y bergamota de Calabria, que aportan una frescura afrutada. En el corazón, las hojas de violeta y la rosa se entrelazan para ofrecer un bouquet floral sofisticado y femenino. La base combina la calidez de la manteca de cacao, el acorde de cuero y la madera de cedro de Virginia, proporcionando una estela duradera y envolvente que deja una impresión memorable.',
    image: 'lancome_la_vie_est_belle_lelixir.jpg',
    notes: {
      top: 'frambuesa, licor, bergamota de Calabria',
      middle: 'hojas de violeta, rosa',
      base: 'manteca de cacao, acorde de cuero, madera de cedro de Virginia'
    },
    options: [
      { name: SizeOptions.ML5, price: 110.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 220.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 111,
    house: 'Lattafa',
    name: 'Mayar Cherry Intense',
    description:
      'Esta esencia cautivadora se abre con una explosión fresca de fresa y bergamota, creando una introducción vibrante y jugosa. En el corazón, se revela la rica e indulgente esencia de mermelada de cereza y cacao, añadiendo dulzura y profundidad a la composición. Finalmente, las notas de fondo de vainilla, pachulí y ámbar proporcionan un acabado cálido y cautivador que perdura bellamente en la piel.',
    image: 'lattafa_mayar_cherry_intense.jpg',
    notes: {
      top: 'fresa, bergamota',
      middle: 'mermelada de cereza, cacao',
      base: 'vainilla, pachulí, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 112,
    house: 'Dolce & Gabbana',
    name: 'Devotion Eau de Parfum',
    description:
      'Esta esencia cautivadora se abre con una nota luminosa de limón confitado, que aporta una frescura dulce y cítrica. En el corazón, la flor de azahar del naranjo se combina con la panacota y el ron, creando un acorde cremoso y embriagador. La base está dominada por la vainilla, que proporciona una calidez envolvente y duradera.',
    image: 'dolce_gabbana_devotion_edp.jpg',
    notes: {
      top: 'limón confitado',
      middle: 'flor de azahar del naranjo, panacota, ron',
      base: 'vainilla'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 113,
    house: 'Hugo Boss',
    name: 'Boss Bottled Triumph Elixir',
    description:
      'Esta esencia se caracteriza por su aroma amaderado y ahumado, ofreciendo una experiencia olfativa sofisticada y masculina. Se abre con notas de hoja de violeta, que aportan una frescura verde y sutil. En el corazón, el vetiver añade profundidad y un carácter terroso. La base está dominada por el patchouli, proporcionando una calidez terrosa y persistente.',
    image: 'hugo_boss_boss_bottled_triumph_elixir.jpg',
    notes: {
      top: 'hoja de violeta',
      middle: 'vetiver',
      base: 'patchouli'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 114,
    house: 'Hugo Boss',
    name: 'Boss Bottled Parfum',
    description:
      'Esta esencia sofisticada se abre con notas de salida de incienso de olíbano (franquincienso) y mandarina, que aportan una frescura especiada. En el corazón, se encuentran el árbol de la higuera y la raíz de lirio, ofreciendo una profundidad amaderada y terrosa. La base está compuesta por cedro y cuero, proporcionando una calidez intensa y duradera.',
    image: 'hugo_boss_boss_bottled_parfum.jpg',
    notes: {
      top: 'incienso de olíbano (franquincienso), mandarina',
      middle: 'árbol de la higuera, raíz de lirio',
      base: 'cedro, cuero'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 115,
    house: 'Viktor & Rolf',
    name: 'SpiceBomb Extreme',
    description:
      'Esta esencia intensa y seductora se abre con una explosión de lavanda aromática, combinada con especias picantes como comino, canela y azafrán. En el corazón, las notas de tabaco y bourbon se fusionan con la calidez de la vainilla, creando una estela duradera y envolvente.',
    image: 'viktor_rolf_spicebomb_extreme.webp',
    notes: {
      top: 'lavanda, comino, canela, azafrán',
      middle: 'tabaco, bourbon',
      base: 'vainilla'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 116,
    house: 'Azzaro',
    name: 'The Most Wanted Eau de Toilette Intense',
    description:
      'Es una fragancia de la familia olfativa Fougère Amaderada para hombres. Esta esencia audaz y carismática se abre con una nota vibrante de bergamota verde mediterránea, seguida por un corazón de lavanda ardiente que aporta intensidad y profundidad. En el fondo, un acorde de licor de musgo añade una calidez terrosa y seductora, creando una estela inolvidable.',
    image: 'azzaro_the_most_wanted_intense.jpg',
    notes: {
      top: 'bergamota',
      middle: 'lavanda',
      base: 'licor, musgo'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 117,
    house: 'Calvin Klein',
    name: 'CK One',
    description:
      'Esta esencia fresca y juvenil se abre con notas vibrantes de piña, mandarina, papaya, bergamota, cardamomo y limón. En el corazón, se despliegan acordes florales de nuez moscada, violeta, raíz de lirio, jazmín, lirio de los valles, rosa y fresia. La base combina sándalo, ámbar, almizcle, cedro, musgo de roble, té verde y acordes verdes, creando una estela limpia y versátil.',
    image: 'calvin_klein_ck_one.jpeg',
    notes: {
      top: 'piña, mandarina, papaya, bergamota, cardamomo, limón',
      middle: 'nuez moscada, violeta, raíz de lirio, jazmín, lirio de los valles, rosa, fresia',
      base: 'sándalo, ámbar, almizcle, cedro, musgo de roble, té verde, acordes verdes'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 118,
    house: 'Calvin Klein',
    name: 'CK One Shock For Her',
    description:
      'Esta esencia audaz y seductora se abre con notas vibrantes de flor de pasionaria, amapola roja y peonía. En el corazón, se despliegan acordes de chocolate mexicano, zarzamora, narciso y jazmín, aportando una dulzura intrigante. La base combina vainilla, almizcle, ámbar y pachulí, creando una estela cálida y envolvente.',
    image: 'calvin_klein_ck_one_shock_for_her.jpg',
    notes: {
      top: 'flor de pasionaria, amapola roja, peonía',
      middle: 'chocolate mexicano, zarzamora, narciso, jazmín',
      base: 'vainilla, almizcle, ámbar, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 119,
    house: 'Calvin Klein',
    name: 'CK One Shock For Him',
    description:
      'Fragancia atrevida y juvenil que rompe con la frescura habitual de la línea CK One, optando por un perfil más oscuro y especiado. Su apertura combina la energía cítrica de la clementina con el frescor de la lavanda y un toque inesperado de pepino. En el corazón, las especias toman protagonismo con un mix de cardamomo, pimienta y albahaca, aportando un carácter vibrante y ligeramente terroso. La base es cálida y adictiva, con un acorde de tabaco dulce fusionado con ámbar y pachulí, dejando una estela sensual y envolvente. Ideal para quienes buscan un aroma moderno y seductor sin perder versatilidad.',
    image: 'calvin_klein_ck_one_shock_for_him.webp',
    notes: {
      top: 'clementina, lavanda, pepino',
      middle: 'cardamomo, pimienta, albahaca',
      base: 'tabaco, ámbar, pachulí, notas amaderadas'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 120,
    house: 'Al Haramain',
    name: 'Dubai Night',
    description:
      'Fragancia opulenta y misteriosa que evoca la energía vibrante de las noches en Dubái. Su inicio es especiado y exótico, con un toque de azafrán y resinas que se combinan con la frescura cítrica de la bergamota. A medida que evoluciona, el oud toma protagonismo, acompañado por una rosa aterciopelada y un matiz floral elegante que aporta profundidad. La base es cálida y envolvente, con ámbar y haba tonka que suavizan la intensidad del oud, mientras el almizcle blanco y el musgo de roble le dan un toque sofisticado. Es una fragancia intensa y seductora, ideal para quienes buscan un aroma con presencia y personalidad.',
    image: 'al_haramain_dubai_night.webp',
    notes: {
      top: 'azafrán, bergamota, resina de elemi',
      middle: 'oud, rosa de Bulgaria, lirio de los valles',
      base: 'haba tonka, ámbar, almizcle blanco, musgo de roble'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 121,
    house: 'Armaf',
    name: 'Club de Nuit Precieux',
    description:
      'Fragancia elegante y moderna que combina lo mejor de los cítricos vibrantes con una base cálida y envolvente. Desde el primer instante, su salida brillante de limón, bergamota y piña despierta los sentidos con un frescor dulce y chispeante, complementado por un toque especiado de pimientas. A medida que evoluciona, las notas amaderadas y florales del corazón suavizan la composición, dando paso a una base rica y sensual de ámbar, vainilla y cuero. Con un equilibrio entre frescura, dulzura y profundidad, esta fragancia es perfecta para quienes buscan un aroma versátil con carácter y sofisticación.',
    image: 'armaf_club_de_nuit_precieux.jpg',
    notes: {
      top: 'piña, limón, pera, caramelo, bergamota, pimienta rosa, pimienta negra',
      middle: 'musgo de roble, maderas blancas, anís, jazmín, lirio de los valles',
      base: 'ambroxan, ámbar, vainilla, almizcle blanco, cuero, cedro, pachulí'
    },
    options: [
      { name: SizeOptions.ML5, price: 95.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 190.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 122,
    house: 'Carolina Herrera',
    name: '212 Men Heroes Forever Young',
    description:
      'Fragancia llena de energía y rebeldía, diseñada para quienes viven el momento sin miedo a ser auténticos. Su apertura es vibrante y chispeante, con una combinación jugosa de pera y el picante fresco del jengibre, que aporta dinamismo desde el primer instante. En el corazón, el geranio y la salvia añaden un toque verde y aromático, dándole equilibrio y modernidad. La base se asienta con una mezcla de cuero y almizcle, creando un fondo cálido y masculino que deja una estela limpia y ligeramente sensual. Es un aroma versátil y juvenil, ideal para quienes buscan un perfume que refleje actitud y frescura a la vez.',
    image: 'carolina_herrera_212_men_heroes_forever_young.jpg',
    notes: {
      top: 'pera, jengibre',
      middle: 'geranio, salvia',
      base: 'almizcle, cuero'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 123,
    house: 'Issey Miyake',
    name: "L'Eau D'Issey",
    description:
      'Es la representación perfecta de frescura y elegancia atemporal. Inspirada en la pureza del agua, su apertura combina la suavidad del loto y el melón con un toque de fresia, evocando la sensación de una brisa cristalina. En el corazón, las flores blancas como el lirio de los valles y la peonía le aportan un carácter delicado pero vibrante, mientras que su base de almizcle y maderas suaves envuelve la piel con una calidez sutil y sofisticada. Es un perfume versátil y ligero, ideal para quienes buscan una fragancia limpia, serena y con un aire refinado.',
    image: 'issey_miyake_leau_dissey.jpg',
    notes: {
      top: 'loto, melón, fresia, agua de rosas, calone',
      middle: 'lirio de los valles, peonía, clavel',
      base: 'almizcle, nardos, cedro, sándalo, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 124,
    house: 'Issey Miyake',
    name: "L'Eau d'Issey Pour Homme",
    description:
      "L'Eau d'Issey Pour Homme es una fragancia que encapsula la esencia de la frescura y la pureza. Desde su lanzamiento en 1994, se ha convertido en un clásico atemporal para el hombre moderno. La apertura es una explosión cítrica vibrante, dominada por el yuzu, un cítrico japonés que aporta una frescura única y chispeante. A medida que evoluciona, emergen notas especiadas y amaderadas que añaden profundidad y carácter, mientras que una base de almizcle y maderas preciosas proporciona una calidez sutil y duradera. Es una fragancia versátil y equilibrada, perfecta para el uso diario y adecuada para cualquier ocasión.",
    image: 'issey_miyake_leau_dissey_pour_homme.webp',
    notes: {
      top: 'yuzu, limón, bergamota, estragón',
      middle: 'nuez moscada, lirio de los valles, cilantro, geranio',
      base: 'almizcle, sándalo, cedro, vetiver, tabaco'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 125,
    house: 'Michael Malul',
    name: 'Vanilla +Creme for Women',
    description:
      'Fragancia reconfortante y envolvente, perfecta para quienes aman los aromas dulces pero equilibrados. Su salida es jugosa y luminosa, con la frescura de la pera y el toque vibrante del pomelo rosado. A medida que evoluciona, un corazón floral cremoso de jazmín y rosa le aporta un aire femenino y delicado. Sin embargo, el verdadero protagonista es su fondo, donde la vainilla y el caramelo se fusionan en una mezcla irresistible, suavizada por un toque almizclado que la hace más sofisticada. Es un aroma cálido y acogedor, ideal para días frescos o momentos en los que simplemente quieres sentirte envuelta en dulzura.',
    image: 'michael_malul_vanilla_creme.jpg',
    notes: {
      top: 'pera, grosella blanca, pomelo rosado',
      middle: 'jazmín sambac, rosa búlgara, flor de almendro',
      base: 'vainilla, caramelo, almizcle, vetiver'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 126,
    house: 'Michael Malul',
    name: 'Sangria + Saffron',
    description:
      'Inspirada en la sofisticación de una noche de cócteles con un toque exótico. Su apertura es chispeante y jugosa, con una combinación de manzana verde y naranja que aporta frescura y energía, mientras que el azafrán le da un matiz especiado y lujoso. A medida que evoluciona, emergen notas de frambuesa y rosa damascena, creando un corazón afrutado y floral con un aire seductor. Finalmente, la base se asienta con ámbar gris y gamuza, envolviendo la fragancia en una calidez aterciopelada que deja una estela elegante y envolvente. Es ideal para quienes buscan un aroma moderno, versátil y con carácter.',
    image: 'michael_malul_sangria_saffron.webp',
    notes: {
      top: 'manzana verde, naranja, azafrán',
      middle: 'frambuesa, rosa damascena, jazmín, lirio de los valles',
      base: 'ámbar gris, gamuza'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 127,
    house: 'Jean Paul Gaultier',
    name: 'Le Beau Flower Edition',
    description:
      'Fragancia que encapsula la esencia de un edén fantástico y seductor. Al aplicarla, se percibe una explosión vibrante de kumquat jugoso y limón ácido, aportando una frescura cítrica que despierta los sentidos. A medida que evoluciona, el corazón revela la intensidad embriagadora de las hojas de violeta, añadiendo una faceta floral y misteriosa. Finalmente, la base de cashmeran envuelve la composición con una calidez amaderada y envolvente, dejando una estela sensual y duradera. Es una fragancia ideal para quienes buscan una experiencia olfativa que combine frescura, profundidad y un toque de misterio.',
    image: 'jean_paul_gaultier_le_beau_flower_edition.webp',
    notes: {
      top: 'kumquat, limón',
      middle: 'hojas de violeta',
      base: 'cashmeran'
    },
    options: [
      { name: SizeOptions.ML5, price: 90.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 180.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 128,
    house: 'Maison Alhambra',
    name: 'Jean Lowe Azure',
    description:
      'Fragancia que evoca la frescura y elegancia de una brisa marina en un día soleado. Ideal para quienes buscan una fragancia versátil que transita con naturalidad desde el día hasta la noche, Azure captura la esencia de la serenidad y el lujo en cada gota.',
    image: 'maison_alhambra_azure.webp',
    notes: {
      top: 'bergamota, mandarina',
      middle: 'jazmín, cedro',
      base: 'ámbar gris, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 129,
    house: 'Maison Alhambra',
    name: 'Jean Lowe Fraiche',
    description:
      'Al aplicarla, se percibe una apertura vibrante con notas cálidas y resinosas de ládano, entrelazadas con la profundidad del pachulí y la riqueza cremosa del sándalo, creando una base amaderada y envolvente. A medida que evoluciona, la dulzura refrescante del melón se armoniza con las delicadas notas florales de jazmín, mientras que el jengibre añade un sutil toque especiado y la nuez moscada aporta una calidez acogedora. Finalmente, la elegancia amaderada del cedro se combina con la rica dulzura del ámbar, dejando una estela duradera y equilibrada. Es una fragancia adecuada tanto para ocasiones formales como para el uso diario, aportando un toque de distinción en cualquier momento.',
    image: 'maison_alhambra_fraiche.jpg',
    notes: {
      top: 'ládano, pachulí, sándalo',
      middle: 'melón, jazmín, jengibre, nuez moscada',
      base: 'cedro, ámbar'
    },
    options: [
      { name: SizeOptions.ML5, price: 50.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 130,
    house: 'Maison Alhambra',
    name: 'Jean Lowe Vibe',
    description:
      'Una explosión de frescura y vitalidad, perfecta para quienes disfrutan de fragancias luminosas y energizantes. Su inicio es chispeante y efervescente, con un toque cítrico que despierta los sentidos al instante. A medida que evoluciona, se percibe un equilibrio entre dulzura frutal y matices herbales, aportando un aire despreocupado y moderno. En el fondo, una cremosidad envolvente suaviza la composición, dejando una estela sofisticada y ligeramente adictiva. Es el compañero ideal para los días soleados o cualquier momento en el que quieras llevar contigo una sensación de frescura y dinamismo.',
    image: 'maison_alhambra_jean_lowe_vibe.webp',
    notes: {
      top: 'cidra, limón, naranja, menta, grosella negra, cilantro',
      middle: 'albaricoque, albahaca, semillas de zanahoria, rosa de mayo',
      base: 'higo, dátiles, ambreta'
    },
    options: [
      { name: SizeOptions.ML5, price: 60.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 120.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 131,
    house: 'Lattafa',
    name: 'Art of Nature II',
    description:
      'Art of Nature II es una fragancia que captura la esencia del equilibrio entre frescura y calidez. Su apertura es luminosa y llena de energía, evocando la sensación de un amanecer vibrante. A medida que evoluciona, la composición se vuelve más compleja, con un contraste intrigante entre toques especiados y un fondo cremoso y envolvente. La base aporta una profundidad sofisticada, con una estela seductora y duradera que deja huella. Es una fragancia versátil, perfecta para quienes buscan un aroma con carácter y elegancia en cualquier ocasión.',
    image: 'lattafa_art_of_nature_ii.jpg',
    notes: {
      top: 'bergamota, olíbano, mandarina, manzana',
      middle: 'flor de azahar, rosa, cardamomo',
      base: 'vainilla, ambroxán, madera de guayaco, cedro, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 132,
    house: 'Armaf',
    name: 'Yum Yum',
    description:
      'Fragancia que evoca la dulzura y la frescura de un postre afrutado en una tarde de verano. Su inicio es una explosión jugosa y vibrante que despierta los sentidos con una mezcla de frutas cítricas y bayas silvestres. A medida que se desarrolla, revela un corazón floral delicado que añade un toque de elegancia y feminidad. Finalmente, la fragancia se asienta en una base cálida y envolvente, dejando una estela suave y aterciopelada que perdura en la piel. Es una elección perfecta para quienes buscan un aroma dulce pero sofisticado, ideal para el uso diario y ocasiones especiales.',
    image: 'armaf_yum_yum.jpg',
    notes: {
      top: 'cereza, bayas silvestres, bergamota, naranja',
      middle: 'vainilla, flores blancas, rosa',
      base: 'notas empolvadas, ámbar, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 133,
    house: 'Hugo Boss',
    name: 'Boss Bottled Unlimited',
    description:
      'Fragancia que encapsula la energía y la frescura de un día vibrante. Su composición ofrece una mezcla revitalizante que inspira confianza y dinamismo. Ideal para el hombre moderno que busca una esencia que lo acompañe en sus desafíos diarios, aportando una sensación de renovación y vigor.',
    image: 'hugo_boss_boss_bottled_unlimited.jpeg',
    notes: {
      top: 'menta, hojas de violeta, pomelo',
      middle: 'piña, canela, rosa',
      base: 'láudano, sándalo, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 70.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    id: 134,
    house: 'Armaf',
    name: 'Odyssey Dubai Chocolat',
    description:
      'Envuelve los sentidos en una experiencia dulce y opulenta, ideal para quienes disfrutan de aromas intensos y sofisticados. Desde el primer instante, despliega una calidez envolvente que recuerda a un postre artesanal, con un toque de especias y un acorde achocolatado que le aporta un carácter indulgente. A medida que evoluciona, la fragancia se torna más profunda y adictiva, con una base amaderada y cremosa que refuerza su elegancia y persistencia en la piel. Es perfecta para quienes buscan una esencia audaz y distintiva, ideal para climas fríos o para destacar en noches especiales.',
    image: 'armaf_odyssey_dubai_chocolat.png',
    notes: {
      top: 'café, pistacho, praliné, knafeh, avellana',
      middle: 'chocolate, vainilla, cardamomo',
      base: 'caramelo, haba tonka, almizcle'
    },
    options: [
      { name: SizeOptions.ML5, price: 75.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 150.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    id: 135,
    house: 'Bharara',
    name: 'Queen',
    description:
      'Fragancia que exuda elegancia y sofisticación con un equilibrio perfecto entre frescura y calidez. Desde el primer instante, despliega una energía radiante y vibrante que cautiva con su luminosidad. A medida que evoluciona, las notas florales envuelven la composición con una feminidad delicada pero poderosa, aportando un toque refinado y encantador. En su fase final, la fragancia se transforma en una estela cálida y seductora que se funde con la piel, dejando un rastro envolvente y memorable. Ideal para quienes buscan una esencia distintiva que refleje seguridad y estilo en cada ocasión.',
    image: 'bharara_queen.jpg',
    notes: {
      top: 'bergamota, limón, flores transparentes',
      middle: 'flores blancas, lirio de los valles, rosa, violeta',
      base: 'caramelo, vainilla, ámbar, pachulí, sándalo'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    id: 136,
    house: 'Rasasi',
    name: 'Hawas Elixir',
    description:
      'Fragancia intensa y elegante que equilibra frescura con profundidad. Su inicio cítrico es chispeante y vibrante, marcando una presencia luminosa desde el primer instante. Conforme evoluciona, aparecen especias cálidas y un toque aromático que le otorgan carácter y sofisticación. La base amaderada y envolvente completa la experiencia con una estela duradera, sensual y refinada. Ideal para destacar en climas frescos o noches especiales.',
    image: 'rasasi_hawas_elixir.jpg',
    notes: {
      top: 'bergamota, limón, mandarina',
      middle: 'cardamomo, canela, lavanda',
      base: 'ámbar, almizcle, notas amaderadas'
    },
    options: [
      { name: SizeOptions.ML5, price: 80.0, status: ItemStatus.Available },
      { name: SizeOptions.ML10, price: 160.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  }
];

export const items_catalogue = [...items_catalogue_general].sort((a, b) => {
  // Primero, comparar por la propiedad 'house'
  if (a.house < b.house) return -1;
  if (a.house > b.house) return 1;

  // Si 'house' es igual, comparar por la propiedad 'name'
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;

  // Si ambos son iguales, devolver 0
  return 0;
});
