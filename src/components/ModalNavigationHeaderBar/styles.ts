import { StyleSheet } from 'react-native';
import { ModalNavigationHeaderBarDimensions, normalize } from 'share/scale';

const styles = StyleSheet.create({
  container: {
    height: ModalNavigationHeaderBarDimensions.headerBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#C6C6C8',
    paddingHorizontal: 20,
  },
  center: { flex: 4 },
  titleText: {
    fontSize: ModalNavigationHeaderBarDimensions.titleFontSize,
    fontWeight: '700',
  },
  right: { flex: 1, alignItems: 'flex-end' },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: normalize(40),
    zIndex: 100,
  },
  actionConfirm: {
    width: '90%',
    borderRadius: normalize(10),
    alignItems: 'center',
    paddingVertical: normalize(15),
    marginHorizontal: normalize(20),
  },
  textButtonConfirm: {
    fontSize: ModalNavigationHeaderBarDimensions.actionFontSize,
    color: 'white',
  },
});
export default styles;
