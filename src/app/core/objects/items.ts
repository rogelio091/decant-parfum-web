import { Gender, Item, ItemStatus } from 'app/core/models/item.type';

const image_basePath = 'images/fragances/';

export const items_catalogue_general: Item[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    status: undefined,
    id: 4
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
    status: undefined,
    id: 5
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
    status: undefined,
    id: 6
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
    status: undefined,
    id: 7
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
    status: undefined,
    id: 8
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
    status: undefined,
    id: 9
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
    status: undefined,
    id: 10
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
    status: undefined,
    id: 11
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
    status: undefined,
    id: 12
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
    status: undefined,
    id: 13
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
    status: undefined,
    id: 14
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
    status: undefined,
    id: 15
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
    status: undefined,
    id: 16
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
    status: undefined,
    id: 17
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
    status: undefined,
    id: 18
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
    status: undefined,
    id: 19
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
    status: undefined,
    id: 20
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
    status: undefined,
    id: 21
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
    status: undefined,
    id: 22
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
    status: undefined,
    id: 23
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
    status: undefined,
    id: 24
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
    status: undefined,
    id: 25
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
    status: undefined,
    id: 26
  },
  {
    house: 'Dolce & Gabbana',
    name: 'The One Men EDP',
    description:
      'Una fragancia cálida y elegante que combina frescura y especias con un fondo amaderado profundo, ideal para el hombre carismático y seguro de sí mismo.',
    image: image_basePath + 'theonemendp.jpg',
    notes: {
      top: 'toronja (pomelo), cilantro, albahaca',
      middle: 'jengibre, cardamomo, flor de azahar del naranjo',
      base: 'ámbar, tabaco, cedro'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'theonewomenedp.webp',
    notes: {
      top: 'lichi, mandarina, durazno (melocotón), bergamota',
      middle: 'azucena, ciruela, jazmín, lirio de los valles (muguete)',
      base: 'ámbar, almizcle, vainilla, vetiver'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'Myfifthavenu.jpg',
    notes: {
      top: 'limón, mandarina, notas ozónicas, hojas de violeta',
      middle: 'flor de loto, jazmín',
      base: 'almizcles, maderas de ámbar, raíz de lirio, cedro'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
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
    image: image_basePath + 'giorgioarmaniacquadigioparfum.webp',
    notes: {
      top: 'notas marinas, bergamota',
      middle: 'romero, esclarea, geranio',
      base: 'incienso de olíbano, pachulí'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'giorgioarmaniacquadigioprofondoedp.jpg',
    notes: {
      top: 'notas marinas, aquozone, bergamota, mandarina verde',
      middle: 'romero, lavanda, ciprés, lentisco',
      base: 'almizcle, pachulí, ámbar mineral'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'giorgioarmanistrongerwithyouintensely.webp',
    notes: {
      top: 'pimienta rosa, enebro de Virginia, violeta',
      middle: 'tófe, canela, lavanda, salvia',
      base: 'vainilla, ámbar, haba tonka, gamuza'
    },
    options: [
      { name: '5ml', price: 100.0, status: ItemStatus.Available },
      { name: '10ml', price: 200.0, status: ItemStatus.Available }
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
    image: image_basePath + 'givenchygentlemansocietyextreme.jpg',
    notes: {
      top: 'nuez moscada, menta picante, esclarea',
      middle: 'café, raíz de lirio, narciso francés, vetiver de Madagascar, vetiver de Haití',
      base: 'vainilla de Madagascar, sándalo australiano, cedro del Himalaya'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'givenchyirresistible.jpg',
    notes: {
      top: 'pera, almizcle ambreta',
      middle: 'rosa, iris',
      base: 'cedro de Virginia, almizcle'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'gisadaambassadormen.webp',
    notes: {
      top: 'mandarina verde, manzana, cardamomo, violeta',
      middle: 'lavanda, pimienta negra, peonía, pachulí, mango',
      base: 'vetiver, ámbar, vainilla, musgo, madera de teca'
    },
    options: [
      { name: '5ml', price: 110.0, status: ItemStatus.Available },
      { name: '10ml', price: 220.0, status: ItemStatus.Available }
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
    image: image_basePath + 'halloweenmanx.jpg',
    notes: {
      top: 'cardamomo, lavanda, limón (lima ácida)',
      middle: 'café, whisky, canela, cuero, notas minerales',
      base: 'haba tonka, ámbar, incienso'
    },
    options: [
      { name: '5ml', price: 40.0, status: ItemStatus.Available },
      { name: '10ml', price: 80.0, status: ItemStatus.Available }
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
    image: image_basePath + 'hermesh24herbesvives.jpg',
    notes: {
      top: 'hierbas frescas',
      middle: 'granita de pera',
      base: 'Physcool®'
    },
    options: [
      { name: '5ml', price: 100.0, status: ItemStatus.Available },
      { name: '10ml', price: 200.0, status: ItemStatus.Available }
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
    image: image_basePath + 'hugobossbottledelixir.webp',
    notes: {
      top: 'incienso, cardamomo',
      middle: 'pachulí, vetiver',
      base: 'ládano, cedro'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jeanpaulgaultierlebeauleparfum.jpg',
    notes: {
      top: 'piña, iris, ciprés, jengibre',
      middle: 'coco, notas amaderadas',
      base: 'haba tonka, sándalo, ámbar, ámbar gris'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jeanpaulgaultierlebeauparadisegarden.jpg',
    notes: {
      top: 'notas acuáticas, notas verdes, menta, jengibre',
      middle: 'coco, higo, sal',
      base: 'sándalo, haba tonka'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jeanpaulgaultierlemaleelixir.webp',
    notes: {
      top: 'lavanda, menta',
      middle: 'vainilla, benjuí',
      base: 'miel, haba tonka, tabaco'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jeanpaulgaultierlemaleleparfum.png',
    notes: {
      top: 'cardamomo',
      middle: 'lavanda, iris',
      base: 'vainilla, notas orientales, notas amaderadas'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jeanpaulgaultierlemalelover.webp',
    notes: {
      top: 'pimienta blanca, lima dedo',
      middle: 'ámbar gris, notas marinas, almizcle',
      base: 'vainilla, notas amaderadas'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jeanpaulgaultierultramale.jpg',
    notes: {
      top: 'bergamota, pera, lavanda negra, menta',
      middle: 'comino, canela, salvia esclarea, flor azteca negra',
      base: 'vainilla negra, ámbar, cedro, pachulí'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanogosace.webp',
    notes: {
      top: 'zest de limón, flor de azahar',
      middle: 'especias',
      base: 'sándalo, almizcle, ámbar'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanogosbid.png',
    notes: {
      top: 'cardamomo, iris, violeta, ambroxan',
      middle: 'almizcle',
      base: 'madera de sándalo, madera de cedro'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanogosdiamond.webp',
    notes: {
      top: 'especias, naranja sanguina, pimienta negra',
      middle: 'lavanda, flor de azahar',
      base: 'notas amaderadas, musgo, sándalo blanco, haba tonka, ámbar'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanofullhouse.webp',
    notes: {
      top: 'bergamota de Calabria, naranja de Sicilia, cidra de Sicilia',
      middle: 'neroli tunecino, jengibre nigeriano, canela de Ceilán',
      base: 'té negro chino, madera de guayaco, olíbano, ambroxan'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanogoshigherroller.jpg',
    notes: {
      top: 'pomelo, bergamota, grosella negra',
      middle: 'jengibre, canela, cidra, cardamomo',
      base: 'pimienta rosa, pachulí'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanogosjackpot.png',
    notes: {
      top: 'cítricos, bergamota',
      middle: 'notas frutales dulces',
      base: 'ámbar, almizcle, vainilla'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanogosking.jpg',
    notes: {
      top: 'naranja, limón, bergamota',
      middle: 'frutas',
      base: 'ámbar, vainilla de Madagascar, almizcle blanco'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanogosmoon.webp',
    notes: {
      top: 'gardenia, clavel, jazmín',
      middle: 'pachulí, flores, notas marinas, sándalo',
      base: 'caramelo, café'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'jomilanogosrougeextrait.jpg',
    notes: {
      top: 'jazmín, lavanda, bergamota',
      middle: 'amberwood, ámbar gris',
      base: 'notas amaderadas, almizcle'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lancomelavieestbelleroseextraordinaire.jpg',
    notes: {
      top: 'bergamota, naranja, acorde de tallo verde',
      middle: 'concreto de iris, agua de rosa, absoluto de rosa damascena, acorde de rosa espacial',
      base: 'almizcle, ambroxan, sándalo, musgo, notas amaderadas'
    },
    options: [
      { name: '5ml', price: 100.0, status: ItemStatus.Available },
      { name: '10ml', price: 200.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafaasad.webp',
    notes: {
      top: 'pimienta negra, tabaco, piña',
      middle: 'pachulí, café, iris',
      base: 'vainilla, ámbar, madera seca, benjuí, ládano'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafaasadzanzibar.webp',
    notes: {
      top: 'pimienta negra, lavanda marina',
      middle: 'agua de coco salada, iris',
      base: 'vainilla, incienso'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafaeclaireedp.jpg',
    notes: {
      top: 'caramelo, leche, azúcar',
      middle: 'miel, flores blancas',
      base: 'vainilla, praliné, almizcle'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafahayaedp.webp',
    notes: {
      top: 'champaña, fresa, naranja tangerina, naranja sanguina, rosa',
      middle: 'gardenia, jazmín, orquídea de vainilla',
      base: 'ámbar, sándalo, castaña'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafaherconfession.webp',
    notes: {
      top: 'acorde místico, canela',
      middle: 'jazmín, nardo, incienso, mahonial',
      base: 'vainilla, haba tonka, almizcle'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafahisconfession.jpg',
    notes: {
      top: 'canela, lavanda, mandarina',
      middle: 'iris, benjuí, ciprés, mahonial',
      base: 'vainilla, haba tonka, ámbar, cedro, incienso, pachulí'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafahonoryglory.jpeg',
    notes: {
      top: 'piña, créme brûlée',
      middle: 'canela, benjuí, cúrcuma (azafrán de la India), pimienta negra',
      base: 'vainilla, cachemira, sándalo, musgo'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafakhamrah.jpg',
    notes: {
      top: 'canela, nuez moscada, bergamota',
      middle: 'dátiles, praliné, nardos, mahonial',
      base: 'vainilla, haba tonka, benjuí, mirra, amberwood, akigalawood'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafakhamrahqahwa.jpg',
    notes: {
      top: 'canela, cardamomo, jengibre',
      middle: 'praliné, frutas confitadas, flores blancas',
      base: 'café, vainilla, haba tonka, benjuí, almizcle'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafamayarforwomen.jpg',
    notes: {
      top: 'frambuesa, lichi, hoja de violeta',
      middle: 'peonía, rosa blanca, jazmín',
      base: 'vainilla, almizcle'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafayara.webp',
    notes: {
      top: 'orquídea, heliotropo, naranja tangerina',
      middle: 'acuerdo goloso, frutas tropicales',
      base: 'vainilla, almizcle, sándalo'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafayaracandy.jpg',
    notes: {
      top: 'grosellas negras, mandarina verde',
      middle: 'caramelo efervescente de fresa, gardenia',
      base: 'vainilla, ámbar, sándalo, almizcle'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafayaramoi.webp',
    notes: {
      top: 'durazno (melocotón), jazmín',
      middle: 'caramelo, ámbar',
      base: 'pachulí, sándalo'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafayaratous.jpg',
    notes: {
      top: 'mango, coco, maracuyá (fruta de la pasión)',
      middle: 'jazmín, heliotropo, flor de azahar del naranjo',
      base: 'vainilla, almizcle, cachemira'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'maisonalhambrajeanloweimmortel.webp',
    notes: {
      top: 'toronja (pomelo), jengibre, bergamota',
      middle: 'romero, notas acuáticas, salvia, geranio',
      base: 'ambroxan, ámbar, ládano'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'maisonalhambralIntrude.webp',
    notes: {
      top: 'pera, bergamota',
      middle: 'nardos, flor de azahar del naranjo, jazmín sambac',
      base: 'ambroxan, pachulí, vainilla, vetiver'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'montblancexplorer.jpg',
    notes: {
      top: 'bergamota, pimienta rosa, esclarea',
      middle: 'vetiver de Haití, cuero',
      base: 'ambroxan, Akigalawood, hojas de pachulí de Indonesia, vaina de cacao'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'montblancexplorerplatinum.webp',
    notes: {
      top: 'hojas de violeta, pomelo',
      middle: 'salvia esclarea, lavanda',
      base: 'madera de cedro, pachulí'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'narcisorodriguezbleunoiredp.jpg',
    notes: {
      top: 'bergamota, cardamomo',
      middle: 'almizcle',
      base: 'cedro azul, ébano negro, vetiver'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'pacorabanneinvictusparfum.webp',
    notes: {
      top: 'notas marinas, lavanda, pimienta rosa',
      middle: 'jabón negro, hojas de violeta, mirto',
      base: 'sándalo, cachemira, almizcle'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'pacorabannephantomedpintense.webp',
    notes: {
      top: 'flor de azahar del naranjo escarchada, limón, cardamomo',
      middle: 'lavanda, salvia esclarea, ron',
      base: 'vainilla, cedro, musgo'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'ralphlaurenralph.jpg',
    notes: {
      top: 'hojas de manzano, mandarina italiana, fresia amarilla',
      middle: 'osmanthus japonés, magnolia, flor de tilo, boronia',
      base: 'almizcle, iris blanco'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'rasasihawasblack.webp',
    notes: {
      top: 'piña, toronja (pomelo), bergamota',
      middle: 'cedro, jazmín, pachulí',
      base: 'musgo de roble, ámbar, notas amaderadas'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'rasasihawasforhim.webp',
    notes: {
      top: 'manzana, bergamota, limón (lima ácida), canela',
      middle: 'notas acuosas, ciruela, flor de azahar del naranjo, cardamomo',
      base: 'ámbar gris, almizcle, trozos de madera a la deriva, pachulí'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'rasasihawasice.webp',
    notes: {
      top: 'manzana, bergamota italiana, limón siciliano, anís estrellado',
      middle: 'flor de azahar del naranjo, ciruela, cardamomo',
      base: 'musgo, madera flotante, ámbar, almizcle'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'rasasihawaspourfemme.jpg',
    notes: {
      top: 'manzana, granada, toronja (pomelo)',
      middle: 'iris, jazmín sambac (sampaguita), cítricos',
      base: 'praliné, pachulí, vetiver'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'tommyhilfigertommygirledt.webp',
    notes: {
      top: 'flor de manzano, camelia, mandarina, grosellas negras',
      middle: 'limón (lima ácida), madreselva, rosa, toronja (pomelo), azucena, menta, violeta',
      base: 'magnolia, jazmín, cedro, sándalo, cuero'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
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
    image: image_basePath + 'versacecrystalnoiredt.jpg',
    notes: {
      top: 'jengibre, cardamomo, pimienta',
      middle: 'flor de azahar del naranjo, peonía, gardenia, coco',
      base: 'sándalo, almizcle, ámbar'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'Versaceerosedp.webp',
    notes: {
      top: 'menta, manzana acaramelada, limón (lima ácida), mandarina',
      middle: 'ambroxan, geranio, salvia esclarea',
      base: 'vainilla, cedro, sándalo, pachulí, naranja amarga, cuero'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
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
    image: image_basePath + 'Versaceerosenergy.png',
    notes: {
      top: 'bergamota italiana, naranja sanguina, lima, mandarina verde, toronja, limón',
      middle: 'pimienta rosa, grosella negra, ámbar blanco',
      base: 'pachulí de Indonesia, almizcle, musgo de roble'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'versaceerosFlame.jpg',
    notes: {
      top: 'mandarina, pimienta negra, limón (lima ácida), chinotto, romero',
      middle: 'geranio, rosa, Pepperwood™',
      base: 'vainilla, haba tonka, sándalo, cedro de Texas, pachulí, musgo de roble'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'versaceoudnoir.jpg',
    notes: {
      top: 'pimienta negra, naranja amarga, neroli',
      middle: 'azafrán, cardamomo, incienso de olíbano (franquincienso)',
      base: 'madera de oud, pachulí, Leatherwood'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'versacepourfemmedylanpurpleedp.jpg',
    notes: {
      top: 'pera, naranja amarga, bergamota',
      middle: 'fresia, Pomarose, Mahonial',
      base: 'ambroxan, Iso E Super, Sylkolide, cedro de Virginia, Árbol de Belambra'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'versacepourhomme.jpg',
    notes: {
      top: 'limón (lima ácida), bergamota, neroli, rosa de Mai',
      middle: 'jacinto, esclarea, cedro, geranio',
      base: 'haba tonka, almizcle, ámbar'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
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
    image: image_basePath + 'versaceversense.png',
    notes: {
      top: 'bergamota, higo, mandarina verde, cítricos, pera',
      middle: 'azucena, jazmín, cardamomo, narciso',
      base: 'sándalo, cedro de Virginia, olivo, almizcle'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
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
    image: image_basePath + 'xerjoff1861naxos.jpg',
    notes: {
      top: 'lavanda, bergamota, limón (lima ácida)',
      middle: 'miel, canela, cachemira, jazmín sambac',
      base: 'hojas de tabaco, vainilla, haba tonka'
    },
    options: [
      { name: '5ml', price: 180.0, status: ItemStatus.Available },
      { name: '10ml', price: 360.0, status: ItemStatus.Available }
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
    image: image_basePath + 'xerjofferbapura.jpg',
    notes: {
      top: 'naranja siciliana, bergamota de Calabria, limón siciliano',
      middle: 'frutas exóticas',
      base: 'almizcle blanco, vainilla de Madagascar, ámbar'
    },
    options: [
      { name: '5ml', price: 160.0, status: ItemStatus.Available },
      { name: '10ml', price: 320.0, status: ItemStatus.Available }
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
    image: image_basePath + 'yvessaintlaurentlilbreedp.webp',
    notes: {
      top: 'lavanda, mandarina, grosellas negras, petit grain',
      middle: 'lavanda, flor de azahar del naranjo, jazmín',
      base: 'vainilla de Madagascar, almizcle, cedro, ámbar gris'
    },
    options: [
      { name: '5ml', price: 100.0, status: ItemStatus.Available },
      { name: '10ml', price: 200.0, status: ItemStatus.Available }
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
    image: image_basePath + 'yvessaintlaurentmyslfedp.webp',
    notes: {
      top: 'bergamota de Calabria, vert de bergamota',
      middle: 'flor de naranjo de Túnez',
      base: 'Ambrofix™, pachulí'
    },
    options: [
      { name: '5ml', price: 90.0, status: ItemStatus.Available },
      { name: '10ml', price: 180.0, status: ItemStatus.Available }
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
    image: image_basePath + 'yvessaintlaurentyedp.webp',
    notes: {
      top: 'manzana, jengibre, bergamota',
      middle: 'salvia, bayas de enebro, geranio',
      base: 'amberwood, haba tonka, cedro, vetiver, incienso de olíbano'
    },
    options: [
      { name: '5ml', price: 80.0, status: ItemStatus.Available },
      { name: '10ml', price: 160.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafafakhar.jpg',
    notes: {
      top: 'frutas, azucena, granada, aldehídos',
      middle: 'nardos, jazmín, gardenia, ylang-ylang, madreselva, rosa, peonía',
      base: 'vainilla, almizcle blanco, sándalo, ambroxan'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'grandeur_pink_aura.avif',
    notes: {
      top: 'frambuesa, lichi, grosella negra',
      middle: 'rosa, magnolia, benjuí',
      base: 'ámbar, pachulí'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'grandeur_aura_pour_femme.jpg',
    notes: {
      top: 'violeta',
      middle: 'peonía, jazmín',
      base: 'sándalo, cachemira, vainilla'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'maison_alhambra_jean_lowe_matiere.jpg',
    notes: {
      top: 'jarabe de grosella negra, notas acuáticas',
      middle: 'rosa, ciclamen, narciso, jazmín sambac',
      base: 'madera de oud, pachulí, incienso'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'bharara_rohit_delicate.jpg',
    notes: {
      top: 'mandarina, frutas tropicales',
      middle: 'orquídea, heliotropo',
      base: 'postre de frutos rojos, vainilla, almizcle, sándalo'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
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
    image: image_basePath + 'maison_alhambra_glossy.jpg',
    notes: {
      top: 'pera, pimienta rosa, bergamota',
      middle: 'jazmín, rosa',
      base: 'vainilla, almizcle blanco, pachulí, cedro'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafa_tharwah_silver.jpg',
    notes: {
      top: 'menta, bergamota',
      middle: 'lavanda, salvia esclarea',
      base: 'almizcle, vetiver, cedro'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
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
    image: image_basePath + 'grandeur_elite_florist.jpg',
    notes: {
      top: 'peonía',
      middle: 'rosa, osmanthus',
      base: 'sándalo'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafa_badee_al_oud_noble_blush.webp',
    notes: {
      top: 'leche de rosas',
      middle: 'merengue, almendra',
      base: 'vainilla, sándalo, almizcle'
    },
    options: [
      { name: '5ml', price: 60.0, status: ItemStatus.Available },
      { name: '10ml', price: 120.0, status: ItemStatus.Available }
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
    image: image_basePath + 'amaran_voca_celebrity.webp',
    notes: {
      top: 'jazmín sambac',
      middle: 'cashmeran, rosa turca',
      base: 'vainilla, ámbar'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'amaran_voca_pink.webp',
    notes: {
      top: 'manzana Pink Lady, jazmín',
      middle: 'chicle, caramelo',
      base: 'ámbar, haba tonka, sándalo'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'amaran_voca_touch.webp',
    notes: {
      top: 'fresa, bergamota, almendra amarga',
      middle: 'peonía, ylang-ylang',
      base: 'vainilla, haba tonka, cumarina'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'dumont_nitro_red.webp',
    notes: {
      top: 'manzana, lavanda, bergamota',
      middle: 'sandía, cedro, cálamo aromático',
      base: 'ámbar, sándalo, pachulí'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
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
    image: image_basePath + 'lattafa_vintage_radio.jpg',
    notes: {
      top: 'lavanda, salvia, bergamota',
      middle: 'ciruela, palo santo, pimienta negra',
      base: 'sándalo, madera de oud'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
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
