import { ICategory } from './type';

export const FIELD_NAME = {
  NAME: 'name',
  DESCRIPTION: 'description',
  CATEGORY: 'category',
  COLOR: 'color',
  BELL: 'bell',
  TARGET_DATE_TIME: 'targetDateTime',
  REPEAT: 'repeat',
  IS_REPEAT: 'isRepeat',
  REMINDER: 'reminder',
  IS_REMINDER: 'isReminder',
  IS_IMPORTANT: 'isImportant',
};

export const REPEAT_DATA: { [key: string]: string } = {
  0: 'Hằng ngày',
  1: 'Hằng tuần',
  2: 'Hằng tháng',
  3: 'Hằng năm',
};

export const initCountDownCategory: ICategory[] = [
  {
    id: '0',
    name: 'Quan trọng',
    icon: 'important',
  },
  {
    id: '1',
    name: 'Sinh nhật',
    icon: 'birthday',
  },
  {
    id: '2',
    name: 'Tình yêu',
    icon: 'love',
  },
  {
    id: '3',
    name: 'Ngày lễ',
    icon: 'holiday',
  },
  {
    id: '4',
    name: 'Công việc',
    icon: 'work',
  },
  {
    id: '5',
    name: 'Khác',
    icon: 'other',
  },
  {
    id: '6',
    name: 'Đã kết thúc',
    icon: 'over',
  },
];
