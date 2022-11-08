export interface TAddReminder {
  name: string;
  description?: string;
  category?: string;
  targetDateTime: Date | number | string;
  isRepeat: boolean;
  repeat?: string | boolean;
  isReminder: boolean;
  reminder?: string | boolean;
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
