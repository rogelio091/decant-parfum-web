export type DialogData = {
  title?: string;
  subtitle?: string;
  icon?: {
    show?: boolean;
    name?: string;
    color?: 'primary' | 'accent' | 'warn' | 'basic' | 'info' | 'success' | 'warning' | 'error';
  };
  item?: any;
  items?: any[];
  storeId: number;
  actions?: {
    confirm?: {
      label?: string;
    };
  };
};
