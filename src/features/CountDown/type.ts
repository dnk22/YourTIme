export interface TAddReminder {
  name: string;
  description?: string;
  categoryId?: string;
  categoryName?: string;
  targetDateTime: Date | number | string;
  isRepeat?: boolean;
  repeat?: string;
  isReminder?: boolean;
  reminder?: string | number;
  color?: string;
  bell?: string;
  isImportant?: boolean;
  dateCreated?: Date | number | string;
}
export interface TReminder extends TAddReminder {
  id: string;
}

export interface IAddReminderCategory {
  name: string;
  icon: string;
}
export interface IReminderCategory extends IAddReminderCategory {
  id: string;
}

export interface IAddCategory {
  name: string;
  icon: string;
}
export interface ICategory extends IAddCategory {
  id: string;
}
