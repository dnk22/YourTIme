import { StyleSheet } from 'react-native';
import { DIMENSIONS } from 'share/scale';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    borderRadius: DIMENSIONS.home.reminderItem.itemBorderRadius,
    paddingVertical: DIMENSIONS.home.reminderItem.itemMarginBottom,
    paddingHorizontal: DIMENSIONS.home.reminderItem.itemMarginBottom * 2,
    marginBottom: DIMENSIONS.home.reminderItem.itemMarginBottom,
  },
  pin: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  reminderName: {
    fontSize: DIMENSIONS.home.reminderItem.reminderName,
    fontWeight: '500',
  },
  countdownView: {
    width: '80%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemCountDetail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCountValue: {
    marginBottom: 5,
    fontSize: DIMENSIONS.home.reminderItem.valueCount,
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
