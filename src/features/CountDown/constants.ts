import { ICategory } from './type';

export const FIELD_NAME = {
  NAME: 'name',
  DESCRIPTION: 'description',
  CATEGORY_ID: 'categoryId',
  CATEGORY_NAME: 'categoryName',
  TARGET_DATE_TIME: 'targetDateTime',
  IS_REMINDER: 'isReminder',
  REMINDER: 'reminder',
  COLOR: 'color',
  BELL: 'bell',
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
