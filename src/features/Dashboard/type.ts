export type TReminder = {
  id: string;
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
};
export type TAddReminder = {
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
  dateCreated?: Date;
};
