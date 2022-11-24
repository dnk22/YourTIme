import React, { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { ModalNavigationHeaderBar, SvgIcon } from 'components/index';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { RootStackScreenProps } from 'navigation/type';
import { useAppSelector } from 'store/index';
import { selectCountDownById } from 'store/countDown/countDown.selector';
import PinCountDown from '../CountDownItem/CountDown/PinCountDown';
import { useCustomTheme } from 'resources/theme';
import { formatDateLocal } from 'utils/date';
import { ADD_COUNTDOWN } from 'navigation/constants';

function CountDownDetails({ id }: { id?: string }) {
  const { colors } = useCustomTheme();
  const { navigate } = useNavigation();
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

  const onHandleEdit = () => {
    navigate(ADD_COUNTDOWN, { countDownId: queryCountDownID });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {params?.countDownId && (
        <ModalNavigationHeaderBar text={{ title: 'Chi tiết' }} />
      )}
      <View style={styles.container}>
        <Pressable
          style={[styles.editButton, { backgroundColor: colors.primary }]}
          onPress={onHandleEdit}
        >
          <SvgIcon name="pencil" color="#fff" />
        </Pressable>
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
        </View>
      </View>
    </SafeAreaView>
  );
}

export default memo(CountDownDetails, isEqual);
