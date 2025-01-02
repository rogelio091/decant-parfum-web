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
  },
  {
    house: 'Dolce & Gabbana',
    name: 'The One Men EDP',
    description:
      'Una fragancia cálida y elegante que combina frescura y especias con un fondo amaderado profundo, ideal para el hombre carismático y seguro de sí mismo.',
    image: image_basePath + '',
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
    status: undefined
  },
  {
    house: 'Dolce & Gabbana',
    name: 'The One Women EDP',
    description:
      'Una fragancia floral oriental que combina notas frutales contemporáneas con flores blancas clásicas, reflejando la feminidad y elegancia de la mujer moderna.',
    image: image_basePath + 'dolce_gabbana_the_one_women_edp.jpg',
    notes: {
      top: 'lichi, mandarina, durazno (melocotón), bergamota',
      middle: 'azucena, ciruela, jazmín, lirio de los valles (muguete)',
      base: 'ámbar, almizcle, vainilla, vetiver'
    },
    options: [
      { name: '5ml', price: 95.0, status: ItemStatus.Available },
      { name: '10ml', price: 190.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Elizabeth Arden',
    name: 'My Fifth Avenue',
    description:
      'Una fragancia floral vigorizante que combina notas cítricas, almizcles y maderas, capturando la energía y las posibilidades ilimitadas de la emblemática Quinta Avenida de Nueva York.',
    image: image_basePath + 'elizabeth_arden_my_fifth_avenue.jpg',
    notes: {
      top: 'limón, mandarina, notas ozónicas, hojas de violeta',
      middle: 'flor de loto, jazmín',
      base: 'almizcles, maderas de ámbar, raíz de lirio, cedro'
    },
    options: [
      { name: '5ml', price: 85.0, status: ItemStatus.Available },
      { name: '10ml', price: 170.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Giorgio Armani',
    name: 'Acqua di Giò Parfum',
    description:
      'Una fragancia masculina que combina la frescura del mar con notas amaderadas y aromáticas, capturando la esencia de la naturaleza y la elegancia contemporánea.',
    image: image_basePath + 'giorgio_armani_acqua_di_gio_parfum.jpg',
    notes: {
      top: 'notas marinas, bergamota',
      middle: 'romero, esclarea, geranio',
      base: 'incienso de olíbano, pachulí'
    },
    options: [
      { name: '5ml', price: 100.0, status: ItemStatus.Available },
      { name: '10ml', price: 200.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Giorgio Armani',
    name: 'Stronger With You Intensely',
    description:
      'Una fragancia masculina intensa y envolvente que combina notas especiadas, dulces y amaderadas, reflejando una pasión profunda y una conexión inquebrantable.',
    image: image_basePath + 'giorgio_armani_stronger_with_you_intensely.jpg',
    notes: {
      top: 'pimienta rosa, enebro de Virginia, violeta',
      middle: 'tófe, canela, lavanda, salvia',
      base: 'vainilla, ámbar, haba tonka, gamuza'
    },
    options: [
      { name: '5ml', price: 110.0, status: ItemStatus.Available },
      { name: '10ml', price: 220.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Givenchy',
    name: 'Gentleman Society Extrême',
    description:
      'Una fragancia masculina audaz que combina notas especiadas, florales y amaderadas, diseñada para el caballero moderno que desafía los límites en busca de la excelencia.',
    image: image_basePath + 'givenchy_gentleman_society_extreme.jpg',
    notes: {
      top: 'nuez moscada, menta picante, esclarea',
      middle: 'café, raíz de lirio, narciso francés, vetiver de Madagascar, vetiver de Haití',
      base: 'vainilla de Madagascar, sándalo australiano, cedro del Himalaya'
    },
    options: [
      { name: '5ml', price: 115.0, status: ItemStatus.Available },
      { name: '10ml', price: 230.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },

  {
    house: 'Halloween',
    name: 'Man X',
    description:
      'Una fragancia masculina intrigante que fusiona notas especiadas y dulces, evocando la energía y el misterio de la noche urbana.',
    image: image_basePath + 'halloween_man_x.jpg',
    notes: {
      top: 'cardamomo, lavanda, limón (lima ácida)',
      middle: 'café, whisky, canela, cuero, notas minerales',
      base: 'haba tonka, ámbar, incienso'
    },
    options: [
      { name: '5ml', price: 75.0, status: ItemStatus.Available },
      { name: '10ml', price: 150.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Hermès',
    name: 'H24 Herbes Vives',
    description:
      'Una fragancia masculina fresca que combina la potencia de un ramo de hierbas frescas, la textura de una granita de pera y la vivacidad de una molécula de alta tecnología, Physcool®, evocando la sensación de redescubrir la naturaleza urbana después de la lluvia.',
    image: image_basePath + 'hermes_h24_herbes_vives.jpg',
    notes: {
      top: 'hierbas frescas',
      middle: 'granita de pera',
      base: 'Physcool®'
    },
    options: [
      { name: '5ml', price: 120.0, status: ItemStatus.Available },
      { name: '10ml', price: 240.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Hugo Boss',
    name: 'Bottled Elixir',
    description:
      'Una fragancia amaderada y ambarina altamente concentrada que irradia confianza, diseñada para el hombre moderno que busca sofisticación y profundidad en su aroma.',
    image: image_basePath + 'hugo_boss_bottled_elixir.jpg',
    notes: {
      top: 'incienso, cardamomo',
      middle: 'pachulí, vetiver',
      base: 'ládano, cedro'
    },
    options: [
      { name: '5ml', price: 105.0, status: ItemStatus.Available },
      { name: '10ml', price: 210.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Beau Le Parfum',
    description:
      'Una fragancia masculina que combina notas frescas y exóticas, creando un aroma seductor y sofisticado, ideal para el hombre moderno.',
    image: image_basePath + 'jean_paul_gaultier_le_beau_le_parfum.jpg',
    notes: {
      top: 'piña, iris, ciprés, jengibre',
      middle: 'coco, notas amaderadas',
      base: 'haba tonka, sándalo, ámbar, ámbar gris'
    },
    options: [
      { name: '5ml', price: 115.0, status: ItemStatus.Available },
      { name: '10ml', price: 230.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Beau Paradise Garden',
    description:
      'Una fragancia masculina que fusiona notas verdes, acuáticas y amaderadas, evocando un paraíso tropical donde la frescura del coco y el higo verde se entrelazan con la calidez del sándalo.',
    image: image_basePath + 'jean_paul_gaultier_le_beau_paradise_garden.jpg',
    notes: {
      top: 'notas acuáticas, notas verdes, menta, jengibre',
      middle: 'coco, higo, sal',
      base: 'sándalo, haba tonka'
    },
    options: [
      { name: '5ml', price: 120.0, status: ItemStatus.Available },
      { name: '10ml', price: 240.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Male Elixir',
    description:
      "Una fragancia masculina intensa que reinterpreta el clásico 'Le Male' con una composición más rica y compleja, incorporando notas profundas y cálidas como miel y tabaco, creando una experiencia olfativa seductora y audaz.",
    image: image_basePath + 'jean_paul_gaultier_le_male_elixir.jpg',
    notes: {
      top: 'lavanda, menta',
      middle: 'vainilla, benjuí',
      base: 'miel, haba tonka, tabaco'
    },
    options: [
      { name: '5ml', price: 125.0, status: ItemStatus.Available },
      { name: '10ml', price: 250.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Male Le Parfum',
    description:
      "Una reinterpretación intensa y sofisticada del clásico 'Le Male', que combina notas orientales y amaderadas para ofrecer una fragancia masculina profunda y seductora.",
    image: image_basePath + 'jean_paul_gaultier_le_male_le_parfum.jpg',
    notes: {
      top: 'cardamomo',
      middle: 'lavanda, iris',
      base: 'vainilla, notas orientales, notas amaderadas'
    },
    options: [
      { name: '5ml', price: 110.0, status: ItemStatus.Available },
      { name: '10ml', price: 220.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Le Male Lover',
    description:
      'Una fragancia sensual y carnal que captura la esencia del sol y el mar, evocando la piel cálida sobre arena húmeda, refrescada por la brisa marina.',
    image: image_basePath + 'jean_paul_gaultier_le_male_lover.jpg',
    notes: {
      top: 'pimienta blanca, lima dedo',
      middle: 'ámbar gris, notas marinas, almizcle',
      base: 'vainilla, notas amaderadas'
    },
    options: [
      { name: '5ml', price: 125.0, status: ItemStatus.Available },
      { name: '10ml', price: 250.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Jean Paul Gaultier',
    name: 'Ultra Male',
    description:
      "Una reinterpretación intensa y moderna del clásico 'Le Male', que combina notas dulces y especiadas para ofrecer una fragancia masculina seductora y poderosa.",
    image: image_basePath + 'jean_paul_gaultier_ultra_male.jpg',
    notes: {
      top: 'bergamota, pera, lavanda negra, menta',
      middle: 'comino, canela, salvia esclarea, flor azteca negra',
      base: 'vainilla negra, ámbar, cedro, pachulí'
    },
    options: [
      { name: '5ml', price: 115.0, status: ItemStatus.Available },
      { name: '10ml', price: 230.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Ace',
    description:
      'Una fragancia unisex que abre con un vibrante zest de limón y flor de azahar, pasa a un corazón especiado, y se asienta en una cálida base de sándalo, almizcle y ámbar, ofreciendo un aroma versátil para cualquier ocasión.',
    image: image_basePath + 'jo_milano_game_of_spades_ace.jpg',
    notes: {
      top: 'zest de limón, flor de azahar',
      middle: 'especias',
      base: 'sándalo, almizcle, ámbar'
    },
    options: [
      { name: '5ml', price: 65.0, status: ItemStatus.Available },
      { name: '10ml', price: 130.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Bid',
    description:
      'Una fragancia unisex que combina notas especiadas y florales, ofreciendo una experiencia olfativa sofisticada y envolvente, ideal para quienes buscan un aroma distintivo y elegante.',
    image: image_basePath + 'jo_milano_game_of_spades_bid.jpg',
    notes: {
      top: 'cardamomo, iris, violeta, ambroxan',
      middle: 'almizcle',
      base: 'madera de sándalo, madera de cedro'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Diamond',
    description:
      'Una fragancia unisex que combina notas especiadas, cítricas y amaderadas, creando un aroma equilibrado y seductor, ideal para quienes buscan distinción y refinamiento.',
    image: image_basePath + 'jo_milano_game_of_spades_diamond.jpg',
    notes: {
      top: 'especias, naranja sanguina, pimienta negra',
      middle: 'lavanda, flor de azahar',
      base: 'notas amaderadas, musgo, sándalo blanco, haba tonka, ámbar'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades High Roller',
    description:
      'Una fragancia unisex que se abre con una mezcla refrescante de pomelo, bergamota y grosella negra, seguida de un corazón cálido de jengibre, canela, cidra y cardamomo, y culmina con notas de fondo de pimienta rosa y pachulí, aportando profundidad y riqueza al aroma.',
    image: image_basePath + 'jo_milano_game_of_spades_high_roller.jpg',
    notes: {
      top: 'pomelo, bergamota, grosella negra',
      middle: 'jengibre, canela, cidra, cardamomo',
      base: 'pimienta rosa, pachulí'
    },
    options: [
      { name: '5ml', price: 75.0, status: ItemStatus.Available },
      { name: '10ml', price: 150.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Jackpot',
    description:
      'Una fragancia unisex que se abre con notas cítricas y de bergamota, evoluciona hacia un corazón afrutado y dulce, y culmina en una base cálida de ámbar, almizcle y vainilla, ofreciendo un aroma equilibrado y sofisticado.',
    image: image_basePath + 'jo_milano_game_of_spades_jackpot.jpg',
    notes: {
      top: 'cítricos, bergamota',
      middle: 'notas frutales dulces',
      base: 'ámbar, almizcle, vainilla'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades King',
    description:
      'Una fragancia unisex que se abre con una explosión cítrica de naranja, limón y bergamota, seguida de un corazón afrutado, y culmina en una base cálida y suave de ámbar, vainilla de Madagascar y almizcle blanco, ofreciendo un aroma equilibrado y sofisticado.',
    image: image_basePath + 'jo_milano_game_of_spades_king.jpg',
    notes: {
      top: 'naranja, limón, bergamota',
      middle: 'frutas',
      base: 'ámbar, vainilla de Madagascar, almizcle blanco'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Moon',
    description:
      'Una fragancia unisex que combina notas florales de gardenia, clavel y jazmín, enriquecidas con un corazón de pachulí, flores, notas marinas y sándalo, y una base dulce de caramelo y café, creando un aroma hipnótico y seductor inspirado en las noches mágicas de Nueva York.',
    image: image_basePath + 'jo_milano_game_of_spades_moon.jpg',
    notes: {
      top: 'gardenia, clavel, jazmín',
      middle: 'pachulí, flores, notas marinas, sándalo',
      base: 'caramelo, café'
    },
    options: [
      { name: '5ml', price: 70.0, status: ItemStatus.Available },
      { name: '10ml', price: 140.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Jo Milano',
    name: 'Game of Spades Rouge Extrait',
    description:
      'Una fragancia unisex que combina notas florales y amaderadas, ofreciendo un aroma sofisticado y envolvente, ideal para quienes buscan distinción y elegancia.',
    image: image_basePath + 'jo_milano_game_of_spades_rouge_extrait.jpg',
    notes: {
      top: 'jazmín, lavanda, bergamota',
      middle: 'amberwood, ámbar gris',
      base: 'notas amaderadas, almizcle'
    },
    options: [
      { name: '5ml', price: 75.0, status: ItemStatus.Available },
      { name: '10ml', price: 150.0, status: ItemStatus.Available }
    ],
    gender: Gender.Unisex,
    status: undefined
  },
  {
    house: 'Lancôme',
    name: 'La Vie Est Belle Rose Extraordinaire',
    description:
      'Una reinterpretación moderna de la flor icónica de Lancôme, que combina el Concreto de Iris con tres extractos preciosos de rosa: agua fresca de rosa, absoluto de rosa damascena y un acorde de rosa espacial. Su corazón floral se realza con matices de almizcle amaderado, aportando profundidad y modernidad a la fragancia.',
    image: image_basePath + 'lancome_la_vie_est_belle_rose_extraordinaire.jpg',
    notes: {
      top: 'bergamota, naranja, acorde de tallo verde',
      middle: 'concreto de iris, agua de rosa, absoluto de rosa damascena, acorde de rosa espacial',
      base: 'almizcle, ambroxan, sándalo, musgo, notas amaderadas'
    },
    options: [
      { name: '50ml', price: 115.0, status: ItemStatus.Available },
      { name: '100ml', price: 156.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Asad',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar, lanzada en 2021. Combina notas especiadas y dulces, ofreciendo un aroma sofisticado y duradero que refleja poder y elegancia.',
    image: image_basePath + 'lattafa_asad.jpg',
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
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Asad Zanzibar',
    description:
      'Una fragancia masculina que combina notas especiadas y frescas, evocando la esencia exótica de Zanzíbar. Lanzada en 2024, esta Eau de Parfum ofrece una experiencia olfativa única y duradera.',
    image: image_basePath + 'lattafa_asad_zanzibar.jpg',
    notes: {
      top: 'pimienta negra, lavanda marina',
      middle: 'agua de coco salada, iris',
      base: 'vainilla, incienso'
    },
    options: [
      { name: '5ml', price: 20.0, status: ItemStatus.Available },
      { name: '10ml', price: 35.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Eclaire',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal Gourmand, lanzada en 2024. Combina notas dulces y cremosas que evocan la indulgencia de un postre gourmet, ofreciendo un aroma delicioso y envolvente.',
    image: image_basePath + 'lattafa_eclaire.jpg',
    notes: {
      top: 'caramelo, leche, azúcar',
      middle: 'miel, flores blancas',
      base: 'vainilla, praliné, almizcle'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Haya',
    description:
      'Una fragancia femenina que combina notas frutales y florales, ofreciendo un aroma dulce y sofisticado, ideal para mujeres que buscan destacar con elegancia.',
    image: image_basePath + 'lattafa_haya.jpg',
    notes: {
      top: 'champaña, fresa, naranja tangerina, naranja sanguina, rosa',
      middle: 'gardenia, jazmín, orquídea de vainilla',
      base: 'ámbar, sándalo, castaña'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Her Confession',
    description:
      'Una fragancia femenina que equilibra calidez, misterio y elegancia. Se abre con una cautivadora mezcla de canela y acordes místicos, evolucionando hacia un corazón floral de jazmín, nardo e incienso, y culmina con una base sensual de vainilla, haba tonka y almizcle. Ideal para la mujer moderna que irradia confianza y encanto.',
    image: image_basePath + 'lattafa_her_confession.jpg',
    notes: {
      top: 'acorde místico, canela',
      middle: 'jazmín, nardo, incienso, mahonial',
      base: 'vainilla, haba tonka, almizcle'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Feminine,
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'His Confession',
    description:
      'Una fragancia masculina de la familia olfativa Oriental Amaderada, lanzada en 2024. Combina notas especiadas y amaderadas, ofreciendo un aroma sofisticado y duradero que refleja confianza y elegancia.',
    image: image_basePath + 'lattafa_his_confession.jpg',
    notes: {
      top: 'canela, lavanda, mandarina',
      middle: 'iris, benjuí, ciprés, mahonial',
      base: 'vainilla, haba tonka, ámbar, cedro, incienso, pachulí'
    },
    options: [
      { name: '5ml', price: 50.0, status: ItemStatus.Available },
      { name: '10ml', price: 100.0, status: ItemStatus.Available }
    ],
    gender: Gender.Masculine,
    status: undefined
  },
  {
    house: 'Lattafa',
    name: "Bade'e Al Oud Honor & Glory",
    description:
      'Una fragancia unisex de la familia olfativa Ámbar Afrutada, lanzada en 2023. Combina notas dulces y especiadas, ofreciendo un aroma sofisticado y duradero que refleja lujo y elegancia.',
    image: image_basePath + 'lattafa_honor_glory.jpg',
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
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Khamrah',
    description:
      'Una fragancia unisex de la familia olfativa Aromática Especiada, lanzada en 2022. Combina notas cálidas y dulces, ofreciendo un aroma sofisticado y envolvente que refleja lujo y elegancia.',
    image: image_basePath + 'lattafa_khamrah.jpg',
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
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Khamrah Qahwa',
    description:
      'Una fragancia unisex de la familia olfativa Ámbar Vainilla, lanzada en 2023. Combina notas especiadas y dulces, ofreciendo un aroma cálido y envolvente que evoca la esencia del café árabe.',
    image: image_basePath + 'lattafa_khamrah_qahwa.jpg',
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
    status: undefined
  },
  // HASTA AQUI REVISAR PRECIOS
  {
    house: 'Lattafa',
    name: 'Mayar for Women',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en 2022. Combina notas dulces y florales, ofreciendo un aroma elegante y sofisticado, ideal para mujeres que buscan destacar con sutileza y encanto.',
    image: image_basePath + 'lattafa_mayar_for_women.jpg',
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
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Yara',
    description:
      'Una fragancia femenina de la familia olfativa Ámbar Vainilla, lanzada en 2020. Combina notas florales y frutales con un fondo dulce y amaderado, ofreciendo un aroma sofisticado y envolvente, ideal para mujeres que buscan destacar con elegancia.',
    image: image_basePath + 'lattafa_yara.jpg',
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
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Yara Candy',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal Gourmand, lanzada en 2024. Combina notas dulces y afrutadas, ofreciendo un aroma juvenil y encantador, ideal para mujeres que buscan una esencia alegre y deliciosa.',
    image: image_basePath + 'lattafa_yara_candy.jpg',
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
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Yara Moi',
    description:
      'Una fragancia femenina de la familia olfativa Floral Dulce, lanzada en 2022. Combina notas de durazno y jazmín en la salida, seguidas por un corazón de caramelo y ámbar, y culmina con un fondo de pachulí y sándalo, ofreciendo un aroma elegante y sofisticado.',
    image: image_basePath + 'lattafa_yara_moi.jpg',
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
    status: undefined
  },
  {
    house: 'Lattafa',
    name: 'Yara Tous',
    description:
      'Una fragancia femenina de la familia olfativa Frutal Dulce, lanzada en 2023. Combina notas exóticas y cremosas, ofreciendo un aroma tropical y envolvente, ideal para mujeres que buscan una esencia fresca y encantadora.',
    image: image_basePath + 'lattafa_yara_tous.jpg',
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
    status: undefined
  },
  {
    house: 'Maison Alhambra',
    name: 'Jean Lowe Immortel',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar, lanzada en 2023. Combina notas cítricas y especiadas en la salida, seguidas por un corazón aromático y acuático, y culmina con un fondo ambarado y resinoso, ofreciendo un aroma sofisticado y duradero.',
    image: image_basePath + 'maison_alhambra_jean_lowe_immortel.jpg',
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
    status: undefined
  },
  {
    house: 'Maison Alhambra',
    name: "L'Intrude",
    description:
      'Una fragancia femenina de la familia olfativa Floral, lanzada en 2022. Combina notas frutales y florales, ofreciendo un aroma sofisticado y envolvente, ideal para mujeres que buscan destacar con elegancia.',
    image: image_basePath + 'maison_alhambra_l_intrude.jpg',
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
    status: undefined
  },
  {
    house: 'Montblanc',
    name: 'Explorer',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada Aromática, lanzada en 2019. Combina notas frescas y especiadas en la salida, seguidas por un corazón de vetiver y cuero, y culmina con un fondo de pachulí, cacao y ambroxan, ofreciendo un aroma sofisticado y aventurero.',
    image: image_basePath + 'montblanc_explorer.jpg',
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
    status: undefined
  },
  {
    house: 'Montblanc',
    name: 'Explorer Platinum',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada Ambarada, lanzada en 2023. Combina notas frescas y verdes en la salida, seguidas por un corazón aromático, y culmina con un fondo amaderado, ofreciendo un aroma sofisticado y aventurero.',
    image: image_basePath + 'montblanc_explorer_platinum.jpg',
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
    status: undefined
  },
  {
    house: 'Narciso Rodriguez',
    name: 'Bleu Noir Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada, lanzada en 2018. Combina notas frescas y especiadas en la salida, seguidas por un corazón de almizcle, y culmina con un fondo de cedro azul, ébano negro y vetiver, ofreciendo un aroma sofisticado y seductor.',
    image: image_basePath + 'narciso_rodriguez_bleu_noir_edp.jpg',
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
    status: undefined
  },
  {
    house: 'Paco Rabanne',
    name: 'Invictus Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Acuática, lanzada en 2024. Combina notas frescas y acuáticas en la salida, seguidas por un corazón de jabón negro y hojas de violeta, y culmina con un fondo de sándalo, cachemira y almizcle, ofreciendo un aroma poderoso y sofisticado.',
    image: image_basePath + 'paco_rabanne_invictus_parfum.jpg',
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
    status: undefined
  },
  {
    house: 'Paco Rabanne',
    name: 'Phantom Intense Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar Aromática, lanzada en 2024. Combina notas frescas y especiadas en la salida, seguidas por un corazón de lavanda y ron, y culmina con un fondo de vainilla, cedro y musgo, ofreciendo un aroma intenso y seductor.',
    image: image_basePath + 'paco_rabanne_phantom_intense_edp.jpg',
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
    status: undefined
  },
  {
    house: 'Ralph Lauren',
    name: 'Ralph',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en el año 2000. Combina notas frescas y afrutadas en la salida, seguidas por un corazón floral, y culmina con un fondo almizclado, ofreciendo un aroma juvenil y vibrante.',
    image: image_basePath + 'ralph_lauren_ralph.jpg',
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
    status: undefined
  },
  {
    house: 'Rasasi',
    name: 'Hawas Black',
    description:
      'Una fragancia masculina de la familia olfativa Aromática, lanzada en 2024. Combina notas frescas y afrutadas en la salida, seguidas por un corazón amaderado y floral, y culmina con un fondo de musgo de roble, ámbar y notas amaderadas, ofreciendo un aroma sofisticado y enérgico.',
    image: image_basePath + 'rasasi_hawas_black.jpg',
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
    status: undefined
  },
  {
    house: 'Rasasi',
    name: 'Hawas For Him',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Acuática, lanzada en 2015. Combina notas frescas y afrutadas en la salida, seguidas por un corazón acuático y especiado, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma versátil y vibrante.',
    image: image_basePath + 'rasasi_hawas_for_him.jpg',
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
    status: undefined
  },
  {
    house: 'Rasasi',
    name: 'Hawas Ice',
    description:
      'Una fragancia masculina de la familia olfativa Aromática, lanzada en 2023. Combina notas cítricas y afrutadas en la salida, seguidas por un corazón especiado y floral, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma fresco y vibrante.',
    image: image_basePath + 'rasasi_hawas_ice.jpg',
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
    status: undefined
  },
  {
    house: 'Rasasi',
    name: 'Hawas Pour Femme',
    description:
      'Una fragancia femenina de la familia olfativa Floral, lanzada en 2015. Combina notas afrutadas en la salida, seguidas por un corazón floral y cítrico, y culmina con un fondo dulce y terroso, ofreciendo un aroma sofisticado y encantador.',
    image: image_basePath + 'rasasi_hawas_pour_femme.jpg',
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
    status: undefined
  },
  {
    house: 'Tommy Hilfiger',
    name: 'Tommy Girl Eau de Toilette',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en 1996 y creada por la perfumista Calice Becker. Combina notas frescas y afrutadas en la salida, seguidas por un corazón floral y cítrico, y culmina con un fondo amaderado y ligeramente especiado, ofreciendo un aroma juvenil y vibrante.',
    image: image_basePath + 'tommy_hilfiger_tommy_girl_edt.jpg',
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
    status: undefined
  },
  {
    house: 'Versace',
    name: 'Crystal Noir Eau de Toilette',
    description:
      'Una fragancia femenina de la familia olfativa Oriental Floral, lanzada en 2004 y creada por el perfumista Antoine Lie. Combina notas especiadas en la salida, seguidas por un corazón floral y exótico, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma seductor y elegante.',
    image: image_basePath + 'versace_crystal_noir_edt.jpg',
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
    status: undefined
  },
  {
    house: 'Versace',
    name: 'Eros Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar Amaderada, lanzada en 2020. Combina notas frescas y cítricas en la salida, seguidas por un corazón aromático y especiado, y culmina con un fondo amaderado y dulce, ofreciendo un aroma intenso y seductor.',
    image: image_basePath + 'versace_eros_edp.jpg',
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
    status: undefined
  },
  {
    house: 'Versace',
    name: 'Eros Energy',
    description:
      'Una fragancia masculina de la familia olfativa Cítrica Aromática, lanzada en 2024. Combina notas cítricas vibrantes en la salida, seguidas por un corazón especiado y afrutado, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma fresco y enérgico.',
    image: image_basePath + 'versace_eros_energy.jpg',
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
    status: undefined
  },
  {
    house: 'Versace',
    name: 'Eros Flame',
    description:
      'Una fragancia masculina de la familia olfativa Amaderada Especiada, lanzada en 2018. Combina notas cítricas y especiadas en la salida, seguidas por un corazón floral y especiado, y culmina con un fondo amaderado y dulce, ofreciendo un aroma intenso y apasionado.',
    image: image_basePath + 'versace_eros_flame.jpg',
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
    status: undefined
  },
  {
    house: 'Versace',
    name: 'Oud Noir',
    description:
      'Una fragancia masculina de la familia olfativa Ámbar Amaderada, lanzada en 2013. Combina notas especiadas y cítricas en la salida, seguidas por un corazón cálido y exótico, y culmina con un fondo amaderado y terroso, ofreciendo un aroma intenso y sofisticado.',
    image: image_basePath + 'versace_oud_noir.jpg',
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
    status: undefined
  },
  {
    house: 'Versace',
    name: 'Pour Femme Dylan Purple',
    description:
      'Una fragancia femenina de la familia olfativa Floral Frutal, lanzada en 2022. Combina notas cítricas y afrutadas en la salida, seguidas por un corazón floral vibrante, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma brillante y elegante.',
    image: image_basePath + 'versace_pour_femme_dylan_purple_edp.jpg',
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
    status: undefined
  },
  {
    house: 'Versace',
    name: 'Pour Homme',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Fougère, lanzada en 2008 y creada por el perfumista Alberto Morillas. Combina notas cítricas y florales en la salida, seguidas por un corazón aromático y amaderado, y culmina con un fondo cálido y almizclado, ofreciendo un aroma fresco y elegante.',
    image: image_basePath + 'versace_pour_homme.jpg',
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
    status: undefined
  },
  {
    house: 'Versace',
    name: 'Versense ',
    description:
      'Una fragancia femenina de la familia olfativa Almizcle Amaderado Floral, lanzada en 2009. Combina notas cítricas y afrutadas en la salida, seguidas por un corazón floral especiado, y culmina con un fondo amaderado y almizclado, ofreciendo un aroma fresco y energizante.',
    image: image_basePath + 'versace_versense.jpg',
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
    status: undefined
  },

  {
    house: 'Xerjoff',
    name: '1861 Naxos',
    description:
      'Una fragancia unisex de la familia olfativa Aromática Especiada, lanzada en 2015. Combina notas cítricas y aromáticas en la salida, seguidas por un corazón dulce y especiado, y culmina con un fondo cálido y amaderado, ofreciendo un aroma sofisticado y envolvente.',
    image: image_basePath + 'xerjoff_1861_naxos.jpg',
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
    status: undefined
  },
  {
    house: 'Xerjoff',
    name: 'Erba Pura Eau de Parfum',
    description:
      'Una fragancia unisex de la familia olfativa Ámbar, lanzada en 2019. Combina notas cítricas y afrutadas en la salida, seguidas por un corazón de frutas exóticas, y culmina con un fondo de almizcle blanco, vainilla de Madagascar y ámbar, ofreciendo un aroma vibrante y sofisticado.',
    image: image_basePath + 'xerjoff_erba_pura.jpg',
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
    status: undefined
  },
  {
    house: 'Yves Saint Laurent',
    name: 'Libre Eau de Parfum',
    description:
      'Una fragancia femenina de la familia olfativa Ámbar Fougère, lanzada en 2019 y creada por los perfumistas Anne Flipo y Carlos Benaim. Combina notas cítricas y florales en la salida, seguidas por un corazón floral y aromático, y culmina con un fondo cálido y amaderado, ofreciendo un aroma elegante y contemporáneo.',
    image: image_basePath + 'ysl_libre_edp.jpg',
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
    status: undefined
  },
  {
    house: 'Yves Saint Laurent',
    name: 'MYSLF Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Floral Amaderada, lanzada en 2023. Combina notas cítricas y frescas en la salida, seguidas por un corazón floral vibrante, y culmina con un fondo amaderado y sensual, ofreciendo un aroma moderno y versátil.',
    image: image_basePath + 'ysl_myslf_edp.jpg',
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
    status: undefined
  },
  {
    house: 'Yves Saint Laurent',
    name: 'Y Eau de Parfum',
    description:
      'Una fragancia masculina de la familia olfativa Aromática Fougère, lanzada en 2018 y creada por el perfumista Dominique Ropion. Combina notas frescas y afrutadas en la salida, seguidas por un corazón herbal y floral, y culmina con un fondo amaderado y especiado, ofreciendo un aroma moderno y sofisticado.',
    image: image_basePath + 'ysl_y_edp.jpg',
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
    status: undefined
  }
];
