import add from 'assets/svg/icon-add.svg';
import bookmark from 'assets/svg/icon-bookmark.svg';
import arrowDown from 'assets/svg/icon-down.svg';
import arrowUp from 'assets/svg/icon-up.svg';
import search from 'assets/svg/icon-search.svg';
import category from 'assets/svg/icon-category.svg';
import bellBadge from 'assets/svg/icon-bell-badge.svg';
import closeCircle from 'assets/svg/icon-close-circle.svg';
import general from 'assets/svg/icon-close-circle.svg';
import backward from 'assets/svg/icon-backward.svg';
import birthday from 'assets/svg/icon-birthday.svg';
import calendarHoliday from 'assets/svg/icon-calendar-holiday.svg';
import doneCircle from 'assets/svg/icon-done-circle.svg';
import forward from 'assets/svg/icon-forward.svg';
import heart from 'assets/svg/icon-heart.svg';
import important from 'assets/svg/icon-important.svg';
import work from 'assets/svg/icon-work.svg';
import questionCircle from 'assets/svg/icon-question-circle.svg';
import cloudSync from 'assets/svg/icon-cloud-sync.svg';
import settings from 'assets/svg/icon-settings.svg';
import claim from 'assets/svg/icon-claim.svg';
import text from 'assets/svg/icon-text.svg';
import pencil from 'assets/svg/icon-pencil.svg';
import bellSlashFill from 'assets/svg/icon-bell-slash-fill.svg';
import bellSlash from 'assets/svg/icon-bell-slash.svg';
import bellWaves from 'assets/svg/icon-bell-waves.svg';
import bell from 'assets/svg/icon-bell.svg';

const icon = {
  add,
  bookmark,
  arrowDown,
  arrowUp,
  search,
  category,
  bellBadge,
  closeCircle,
  general,
  backward,
  birthday,
  calendarHoliday,
  doneCircle,
  forward,
  heart,
  important,
  work,
  questionCircle,
  cloudSync,
  settings,
  claim,
  text,
  pencil,
  bellSlashFill,
  bellSlash,
  bellWaves,
  bell,
};

export type IconProps = keyof typeof icon;
export default icon;
