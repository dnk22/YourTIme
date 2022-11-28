import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    maxHeight: 255,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  header: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgb(0,122,255)',
  },
  content: {
    padding: 10,
    paddingBottom: 0,
  },
  alertItem: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgb(242,242,242)',
  },
  alertItemIcon: {
    marginRight: 5,
  },
  alertItemText: {
    fontWeight: '500',
    fontSize: 16,
  },
  addItem: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.4,
    borderTopColor: 'gray',
  },
  textStrike: {
    height: 1,
    position: 'absolute',
    top: '50%',
    backgroundColor: 'black',
  },
});
export default styles;
