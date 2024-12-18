import { FuseNavigationItem } from '@fuse/components/navigation';
import { Permission } from '../api/configs';

export interface CustomNavigationItem extends FuseNavigationItem {
  permission?: Permission | Permission[];
  children?: CustomNavigationItem[];
  hidden?: (item: CustomNavigationItem) => boolean;
}

export interface Navigation {
  compact: FuseNavigationItem[];
  default: FuseNavigationItem[];
  futuristic: FuseNavigationItem[];
  horizontal: FuseNavigationItem[];
}
