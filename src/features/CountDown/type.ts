import { IconProps } from 'components/SvgIcon/const';

export interface TAddCountDown {
  name: string;
  description?: string;
  categoryId?: string;
  categoryName?: string;
  targetDateTime: Date | number;
  alerts?: number[];
  color?: string;
  bell?: string;
  isImportant?: boolean;
  dateCreated?: Date | number;
}

export interface TCountDown extends TAddCountDown {
  id: string;
}

export interface IAddCountDownCategory {
  name: string;
  icon: IconProps;
}
export interface ICountDownCategory extends IAddCountDownCategory {
  id: string;
}
