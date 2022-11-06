import { StyleSheet } from 'react-native';
import { ModalHeaderBarDimensions, normalize } from 'share/scale';

const styles = StyleSheet.create({
  container: {
    height: ModalHeaderBarDimensions.headerBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 20,
  },
  center: { flex: 4 },
  titleText: {
    fontSize: ModalHeaderBarDimensions.titleFontSize,
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
    fontSize: normalize(18),
    color: 'white',
  },
});
export default styles;
