import { Dimensions } from 'react-native';

// prettier-ignore
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Scale item base on screen width and screen height
// Guideline sizes are based on standard ~5" screen mobile device
// prettier-ignore
const [shortDimension, longDimension] = SCREEN_WIDTH < SCREEN_HEIGHT ? [SCREEN_WIDTH, SCREEN_HEIGHT] : [SCREEN_HEIGHT, SCREEN_WIDTH];

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
// prettier-ignore
const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
// prettier-ignore
export const verticalScale = (size : number) => longDimension / guidelineBaseHeight * size;
// prettier-ignore
export const normalize = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

// system icon scale
export const DIMENSIONS = {
  bottomBarHeight: 90,
  home: {
    iconDropDown: normalize(12),
    navbarHeight: normalize(40),
    title: normalize(16),
    viewReminderItemPadding: normalize(15),
    reminderItem: {
      valueCount: normalize(30),
      itemMarginBottom: normalize(10),
      itemBorderRadius: normalize(5),
      heightPin: normalize(120),
      height: normalize(80),
      reminderName: normalize(16),
      details: normalize(14),
    },
  },
};

export const IconSize = {
  app: {
    width: normalize(24),
    height: normalize(24),
  },
  addReminder: {
    width: normalize(22),
    height: normalize(22),
  },
};

export const ModalHeaderBarDimensions = {
  headerBarHeight: normalize(40),
  titleFontSize: normalize(16),
  actionFontSize: normalize(14),
};
