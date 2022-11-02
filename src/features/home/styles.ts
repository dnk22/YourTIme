import { StyleSheet } from 'react-native';
import { DIMENSIONS } from 'share/scale';

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentView: {
    flex: 1,
    padding: DIMENSIONS.home.viewReminderItemPadding,
    paddingVertical: 10,
  },
});

export default styles;
