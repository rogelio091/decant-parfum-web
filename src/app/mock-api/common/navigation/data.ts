/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Permission } from 'app/core/api/configs';
import { CustomNavigationItem } from 'app/core/navigation/navigation.types';

export const defaultNavigation: CustomNavigationItem[] = [
  {
    id: 'catalogue',
    title: 'Catálogo',
    type: 'basic',
    icon: 'heroicons_outline:document-text',
    link: '/catalogue'
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
export const horizontalNavigation: FuseNavigationItem[] = [
  {
    id: 'catalogue',
    title: 'Catálogo',
    type: 'basic',
    icon: 'heroicons_outline:document-text',
    link: '/catalogue'
  }
];
