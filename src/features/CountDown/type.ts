export interface TAddCountDown {
  name: string;
  description?: string;
  categoryId?: string;
  categoryName?: string;
  targetDateTime: Date | number | string;
  isReminder?: boolean;
  reminder?: string | number;
  color?: string;
  bell?: string;
  isImportant?: boolean;
  dateCreated?: Date | number | string;
}

export interface TCountDown extends TAddCountDown {
  id: string;
}

export interface IAddCountDownCategory {
  name: string;
  icon: string;
}
export interface ICountDownCategory extends IAddCountDownCategory {
  id: string;
}

export interface IAddCategory {
  name: string;
  icon: string;
}
export interface ICategory extends IAddCategory {
  id: string;
}
