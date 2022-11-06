export type FormAddReminder = {
  name: string;
  descriptions?: string;
  category?: string;
  color?: string;
  bell?: string;
  targetDateTime?: Date | number | string;
  loop?: string | boolean;
  reminder?: string | boolean;
  isImportant?: boolean;
};
