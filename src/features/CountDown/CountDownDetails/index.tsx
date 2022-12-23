import React, { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { ModalNavigationHeaderBar, SvgIcon } from 'components/index';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { RootStackScreenProps } from 'navigation/type';
import { useAppSelector } from 'store/index';
import PinCountDown from '../CountDownItem/CountDown/PinCountDown';
import { useCustomTheme } from 'resources/theme';
import { formatDateLocal } from 'utils/date';
import { ADD_COUNTDOWN } from 'navigation/constants';
import { countDownSelectors } from 'store/countDown/countDown.selector';

function CountDownDetails({ id }: { id?: string }) {
  const { colors } = useCustomTheme();
  const { navigate } = useNavigation();
  const { params } = useRoute<RootStackScreenProps<'countDownDetails'>['route']>();

  // if preview : no countDownId param available , get countDownId via prop
  const isPreview = !params?.countDownId;

  const queryCountDownID = id || params.countDownId;
  const getCountDownById = useAppSelector(state =>
    countDownSelectors.selectById(state, queryCountDownID),
  );

  const { name, targetDateTime, categoryName, color, alerts } = getCountDownById;

  const targetDateTimeFormatted = useMemo(
    () => formatDateLocal(targetDateTime, "eeee, dd/MM/yyyy 'lúc' HH:mm"),
    [targetDateTime],
  );

  const onHandleEdit = () => {
    navigate(ADD_COUNTDOWN, { countDownId: queryCountDownID });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isPreview && <ModalNavigationHeaderBar text={{ title: 'Chi tiết' }} />}
      <View style={styles.container}>
        {!isPreview && (
          <Pressable
            style={[styles.editButton, { backgroundColor: color || colors.primary }]}
            onPress={onHandleEdit}
          >
            <SvgIcon name="pencil" color="#fff" />
          </Pressable>
        )}
        <Text style={[styles.name, styles.itemMargin]}>{name}</Text>
        <View style={[styles.dateTimeCount, styles.itemMargin]}>
          <PinCountDown colors={colors} targetDateTime={targetDateTime} />
        </View>
        <View style={[styles.box, styles.itemMargin]}>
          <Text style={styles.label}>Thời gian chi tiết</Text>
          <View style={[styles.dateTimeDetails, { backgroundColor: colors.surface }]}>
            <Text>{targetDateTimeFormatted}</Text>
          </View>
        </View>
        <View style={[styles.box, styles.grid, styles.itemMargin]}>
          {categoryName && (
            <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
              <Text>Danh mục: {categoryName}</Text>
            </View>
          )}
          {alerts && (
            <View style={[styles.pinItem, { backgroundColor: colors.surface }]}>
              <Text>Thông báo: {}</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default memo(CountDownDetails, isEqual);
