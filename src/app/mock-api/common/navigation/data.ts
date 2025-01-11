/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Permission } from 'app/core/api/configs';
import { CustomNavigationItem } from 'app/core/navigation/navigation.types';

export const defaultNavigation: CustomNavigationItem[] = [
  {
    id: 'catalogue',
    title: 'Catálogo',
    type: 'group',
    icon: 'heroicons_outline:book-open',
    children: [
      {
        id: 'decants',
        title: 'Decants',
        type: 'basic',
        link: '/decants'
      }
      // {
      //   id: 'completes',
      //   title: 'Perfumes completos',
      //   type: 'basic',
      //   link: '/fragrances'
      // }
    ]
  },
  {
    id: 'faq',
    title: 'Preguntas frecuentes',
    type: 'basic',
    link: '/faqs'
  }
];
export const compactNavigation: FuseNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example'
  }
];
export const futuristicNavigation: FuseNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example'
  }
];
export const horizontalNavigation: CustomNavigationItem[] = [
  {
    id: 'catalogue',
    title: 'Catálogo',
    type: 'collapsable',
    icon: 'heroicons_outline:book-open',
    children: [
      {
        id: 'decants',
        title: 'Decants',
        type: 'basic',
        link: '/decants'
      }
      // {
      //   id: 'completes',
      //   title: 'Perfumes completos',
      //   type: 'basic',
      //   link: '/fragrances'
      // }
    ]
  },
  {
    id: 'faq',
    title: 'Preguntas frecuentes',
    type: 'basic',
    icon: 'heroicons_outline:question-mark-circle',
    link: '/faqs'
  }
];
