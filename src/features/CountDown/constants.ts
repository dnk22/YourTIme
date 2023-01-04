import { ICountDownCategory } from './type';

export const FIELD_NAME = {
  NAME: 'name',
  DESCRIPTION: 'description',
  CATEGORY_ID: 'categoryId',
  CATEGORY_NAME: 'categoryName',
  TARGET_DATE_TIME: 'targetDateTime',
  ALERTS: 'alerts',
  COLOR: 'color',
  BELL: 'bell',
  IS_IMPORTANT: 'isImportant',
};

export const initCountDownCategory: ICountDownCategory[] = [
  {
    id: 'all',
    name: 'Tất cả',
    icon: 'important',
  },
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
    icon: 'heart',
  },
  {
    id: '3',
    name: 'Ngày lễ',
    icon: 'calendarHoliday',
  },
  {
    id: '4',
    name: 'Công việc',
    icon: 'work',
  },
  {
    id: '5',
    name: 'Khác',
    icon: 'work',
  },
  {
    id: '6',
    name: 'Đã kết thúc',
    icon: 'doneCircle',
  },
];
