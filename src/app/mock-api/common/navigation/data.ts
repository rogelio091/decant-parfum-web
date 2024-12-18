/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Permission } from 'app/core/api/configs';
import { CustomNavigationItem } from 'app/core/navigation/navigation.types';

export const defaultNavigation: CustomNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example'
  },
  {
    id: 'admin.users',
    title: 'Usuarios',
    type: 'basic',
    permission: Permission.User,
    icon: 'heroicons_outline:user-group',
    link: '/users'
  },
  {
    id: 'admin.roles',
    title: 'Roles',
    type: 'basic',
    permission: Permission.Role,
    icon: 'heroicons_outline:identification',
    link: '/roles'
  },
  {
    id: 'admin.customers',
    title: 'Clientes',
    type: 'basic',
    permission: Permission.Customer,
    icon: 'heroicons_outline:user-circle',
    link: '/customers'
  },
  {
    id: 'admin.gyms',
    title: 'Gimnasios',
    type: 'basic',
    permission: Permission.Gym,
    icon: 'heroicons_outline:building-library',
    link: '/gyms'
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
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example'
  }
];
