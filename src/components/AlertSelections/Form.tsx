import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles';
import { Pressable, Text, TextInput, View } from 'react-native';
import { MenuAction, MenuView as RNMenuView, NativeActionEvent } from '@react-native-menu/menu';
import { useCustomTheme } from 'resources/theme';
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated';

type FormType = {
  dateValidation: Date | number;
};

const MINUTE = 'minute';
const HOUR = 'hour';
const DAY = 'day';

export const mapTitle: { [key: string]: string } = {
  minute: 'Phút',
  hour: 'Giờ',
  day: 'Ngày',
};

const dropDownDefault: MenuAction[] = [
  {
    id: MINUTE,
    title: 'Phút',
  },
  {
    id: HOUR,
    title: 'Giờ',
  },
  {
    id: DAY,
    title: 'Ngày',
  },
];

export default function Form({ dateValidation }: FormType) {
  const { colors } = useCustomTheme();
  const [limit, setLimit] = useState<number>(0);
  const [isSelect, setIsSelect] = useState<string>('minute');
  const [isShowForm, setIsShowForm] = useState<boolean>(false);

  const formInputAnimated = useSharedValue(0);

  const styleFormInputAnimated = useAnimatedStyle(() => {
    return {
      height: withTiming(formInputAnimated.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  useEffect(() => {
    validateDateNumberInput();
  }, [isSelect, dateValidation]);

  const renderActions = useMemo(() => {
    return dropDownDefault.map(x => {
      x.state = x.id === isSelect ? 'on' : 'off';
      return x;
    });
  }, [isSelect]);

  const validateDateNumberInput = () => {
    let value = 0;
    switch (isSelect) {
      case MINUTE:
        const diffInMinutes = differenceInMinutes(dateValidation, new Date());
        value = diffInMinutes > 0 ? diffInMinutes : 0;
        break;
      case HOUR:
        const diffInHours = differenceInHours(dateValidation, new Date());
        value = diffInHours > 0 ? diffInHours : 0;
        break;
      case DAY:
        const diffInDays = differenceInDays(dateValidation, new Date());
        value = diffInDays > 0 ? diffInDays : 0;
        break;
      default:
        break;
    }
    setLimit(value);
  };

  const onHandlePressAction = ({ nativeEvent: { event } }: NativeActionEvent) => {
    setIsSelect(event);
  };

  const onHandleInputChange = (text: string) => {
    console.log(text);
  };

  const onHandleAddAlert = () => {
    if (!isShowForm) {
      onToggleForm();
    }
  };

  const onToggleForm = () => {
    setIsShowForm(!isShowForm);
  };

  return (
    <>
      <View style={styles.formContainer}>
        {isShowForm && (
          <Animated.View style={styles.form} entering={ZoomIn.duration(400)}>
            <TextInput
              style={[styles.formInput, styles.formBorder, { borderColor: colors.divider }]}
              keyboardType={'numeric'}
              onChangeText={onHandleInputChange}
              autoFocus
              maxLength={limit.toString().length}
            />
            <RNMenuView
              style={[styles.formSelect, styles.formBorder, { borderColor: colors.divider }]}
              onPressAction={onHandlePressAction}
              actions={renderActions}
            >
              <Text style={[{ color: colors.text }]}>{mapTitle[isSelect]}</Text>
            </RNMenuView>
          </Animated.View>
        )}

        {/* <View style={styles.alertView}>
          <Text style={styles.alertText}>
            Thông báo trước tối đa {limit} {mapTitle[isSelect].toLowerCase()}
          </Text>
        </View> */}
      </View>
      <View style={styles.formAction}>
        <Pressable
          style={[styles.addItem, { borderColor: colors.divider }]}
          onPress={onHandleAddAlert}
        >
          <Text style={{ color: colors.text }}>
            Thêm thông báo
            {!isShowForm && ' khác'}
          </Text>
        </Pressable>
        {isShowForm && (
          <Pressable
            style={[styles.addItem, { borderColor: colors.divider }]}
            onPress={onToggleForm}
          >
            <Text style={{ color: colors.text }}>Ẩn</Text>
          </Pressable>
        )}
      </View>
    </>
  );
}
