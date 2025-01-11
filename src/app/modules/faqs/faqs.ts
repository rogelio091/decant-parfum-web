export interface Faq {
  id: number;
  question: string;
  answer: string;
}
export const faqs: Faq[] = [
  {
    id: 1,
    question: '¿Qué es un decant?',
    answer:
      'Es la presentación en envases de 3, 5 o 10 mililitros de tu fragancia favorita, extraída directamente del frasco original.'
  },
  {
    id: 2,
    question: '¿Por qué comprar un decant?',
    answer:
      'Comprar un decant te permite experimentar el aroma original de marcas reconocidas a un costo mucho más accesible.'
  },
  {
    id: 3,
    question: '¿Los perfumes son originales?',
    answer:
      'Sí, los decants se llenan extrayendo el contenido directamente del perfume original, asegurando la experiencia del aroma auténtico.'
  },
  {
    id: 4,
    question: '¿Hacen envíos a todo el país?',
    answer:
      'Sí, dentro de la ciudad de Guatemala y Mixco el costo de envío es de Q35. Para otros departamentos, el costo dependerá del lugar de destino y el envío se realiza a través de Forza.'
  },
  {
    id: 5,
    question: '¿Cuáles son los métodos de pago?',
    answer:
      'Si estás en Guatemala o Mixco, puedes pagar contra entrega. Para envíos realizados con Forza, el pago se realiza mediante depósito o transferencia previa.'
  }
];
