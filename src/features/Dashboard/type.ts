export type TReminder = {
  id: string;
  name: string;
  description?: string;
  category?: string;
  targetDateTime: Date | number | string;
  repeat?: string | boolean;
  reminder?: string | boolean;
  color?: string;
  bell?: string;
  isImportant?: boolean;
  dateCreated?: Date;
};
