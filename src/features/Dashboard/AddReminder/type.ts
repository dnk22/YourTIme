export type FormAddReminder = {
  name: string;
  description?: string;
  category?: string;
  color?: string;
  bell?: string;
  targetDateTime: Date | number;
  loop?: number | boolean;
  reminder?: number | boolean;
  isImportant?: boolean;
};

export const FIELD_NAME = {
  NAME: 'name',
  DESCRIPTION: 'description',
  CATEGORY: 'category',
  COLOR: 'color',
  BELL: 'bell',
  TARGET_DATE_TIME: 'targetDateTime',
  LOOP: 'loop',
  REMINDER: 'reminder',
  ISIMPORTANT: 'isImportant',
};
