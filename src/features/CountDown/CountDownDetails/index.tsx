import React, { memo, useEffect, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { View, Text } from 'react-native';
import { ModalNavigationHeaderBar } from 'components/index';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { RootStackScreenProps } from 'navigation/type';
import { useAppSelector } from 'store/index';
import { selectCountDownById } from 'store/reminder/reminder.selector';
import PinCountDown from '../CountDownItem/CountDown/PinCountDown';
import { useCustomTheme } from 'resources/theme';
import { formatDateLocal } from 'utils/date';

function CountDownDetails({ id }: { id?: string }) {
  const { colors } = useCustomTheme();
  const navigation = useNavigation();
  const { params } =
    useRoute<RootStackScreenProps<'countDownDetails'>['route']>();

  const queryCountDownID = id || params.countDownId;
  const getCountDownById = useAppSelector(state =>
    selectCountDownById(state, queryCountDownID),
  );

  const { name, targetDateTime } = getCountDownById;

  const targetDateTimeFormatted = useMemo(
    () => formatDateLocal(targetDateTime, 'eeee, dd/MM/yyyy'),
    [targetDateTime],
  );

  const onNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      {params?.countDownId && (
        <ModalNavigationHeaderBar
          text={{ title: 'Chi tiết' }}
          onBack={onNavigationBack}
        />
      )}
      <View style={styles.container}>
        <Text style={[styles.name, styles.itemMargin]}>{name}</Text>
        <View style={[styles.dateTimeCount, styles.itemMargin]}>
          <PinCountDown colors={colors} targetDateTime={targetDateTime} />
        </View>
        <View style={[styles.box, styles.itemMargin]}>
          <Text style={styles.label}>Thời gian chi tiết</Text>
          <View
            style={[
              styles.dateTimeDetails,
              { backgroundColor: colors.surface },
            ]}
          >
            <Text>{targetDateTimeFormatted}</Text>
          </View>
        </View>
        <View style={[styles.box, styles.grid, styles.itemMargin]}>
          <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
            <Text>Hằng ngày</Text>
          </View>
          <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
            <Text>Hằng ngày</Text>
          </View>
          <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
            <Text>Hằng ngày</Text>
          </View>
          <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
            <Text>Hằng ngày</Text>
          </View>
          <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
            <Text>Hằng ngày</Text>
          </View>
          <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
            <Text>Hằng ngày</Text>
          </View>
          <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
            <Text>Hằng ngày</Text>
          </View>
          <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
            <Text>Hằng ngày</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default memo(CountDownDetails, isEqual);
