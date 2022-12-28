import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
    borderBottomWidth: 0.5,
  },
  content: {
    maxHeight: 250,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  alertItem: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  alertItemIcon: {
    marginRight: 5,
  },
  alertItemText: {
    fontWeight: '500',
    fontSize: 16,
  },
  alertItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addItem: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.5,
  },
  textStrike: {
    height: 1,
    position: 'absolute',
    top: '50%',
  },
  formContainer: {
    marginBottom: 10,
  },
  form: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  formBorder: {
    borderRadius: 10,
    borderWidth: 0.3,
  },
  formInput: {
    flex: 3,
    height: 40,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  formSelect: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  formAction: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  alertText: {
    color: 'red',
  },
  alertView: {
    marginHorizontal: 10,
  },
});
export default styles;
