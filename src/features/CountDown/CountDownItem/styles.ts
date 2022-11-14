import { StyleSheet } from 'react-native';
import { DIMENSIONS } from 'share/scale';

const styles = StyleSheet.create({
  contextMenu: {
    borderRadius: DIMENSIONS.home.reminderItem.itemBorderRadius,
    marginBottom: DIMENSIONS.home.reminderItem.itemMarginBottom,
  },
  container: {
    position: 'relative',
    zIndex: 111,
    flexDirection: 'column',
    borderRadius: DIMENSIONS.home.reminderItem.itemBorderRadius,
    paddingVertical: DIMENSIONS.home.reminderItem.itemMarginBottom,
    paddingHorizontal: DIMENSIONS.home.reminderItem.itemMarginBottom * 2,
  },
  pin: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  styleOfPinItem: {
    alignItems: 'center',
  },
  reminderName: {
    fontSize: DIMENSIONS.home.reminderItem.reminderName,
    fontWeight: '500',
  },
  detailsView: {
    marginTop: 5,
    paddingTop: 5,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontSizeDetails: {
    fontSize: DIMENSIONS.home.reminderItem.details,
  },
  divider: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '100',
  },
});
export default styles;
