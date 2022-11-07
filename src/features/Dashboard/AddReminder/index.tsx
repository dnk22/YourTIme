import React, { memo, useRef, useState, useMemo } from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import isEqual from 'react-fast-compare';
import { NavigationProp } from '@react-navigation/native';
import { useCustomTheme } from 'resources/theme';
import AddIcon from 'assets/svg/icon-sound.svg';
import Category from 'assets/svg/icon-view-card.svg';
import { IconSize } from 'share/scale';
import styles from './styles';
import { useForm } from 'react-hook-form';
import { TReminder } from '../type';
import { formatDateLocal } from 'utils/date';
import { useAppDispatch } from 'store/index';
import {
  SegmentedControlField,
  InputField,
  DateTimeField,
  ModalNavigationHeaderBar,
  ModalComponent,
  SwitchField,
} from 'components/index';
import { addNewReminder } from 'store/reminder/reminder.slice';
import { FIELD_NAME } from '../const';
import { randomUniqueId } from 'utils/string';

interface IAddReminderProps {
  navigation: NavigationProp<any, any>;
}
const defaultValues = {
  name: '',
  description: '',
  targetDateTime: new Date(),
};

function AddReminder({ navigation }: IAddReminderProps) {
  const { colors } = useCustomTheme();
  const isPickerMode = useRef<any>('date');
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { control, handleSubmit, getValues } = useForm<TReminder>({
    defaultValues,
  });

  // get form values
  const { targetDateTime, isRepeat, isReminder } = getValues();
  const targetDateRender = useMemo(
    () => formatDateLocal(targetDateTime, 'MM/dd/yyyy'),
    [targetDateTime],
  );
  const targetTimeRender = useMemo(
    () => formatDateLocal(targetDateTime, 'HH:mm'),
    [targetDateTime],
  );

  const onHandleBack = () => {
    navigation.goBack();
  };

  const onHandleConfirm = (data: TReminder) => {
    const result = {
      ...data,
      id: randomUniqueId(),
    };
    Alert.alert('Heading', JSON.stringify(result), []);
    // dispatch(addNewReminder(result));
    // navigation.goBack();
  };

  const onHandleOpenDateTimePickerModal = (type: string): void => {
    isPickerMode.current = type;
    onToggleModal();
  };

  const onToggleModal = () => {
    setIsModalShow(!isModalShow);
  };

  const renderModal = () => {
    const { current } = isPickerMode;
    return (
      <ModalComponent isVisible={isModalShow} onToggleModal={onToggleModal}>
        <DateTimeField
          name={FIELD_NAME.TARGET_DATE_TIME}
          control={control}
          locale="vi"
          value={new Date()}
          mode={current}
          display={current === 'date' ? 'inline' : 'spinner'}
        />
      </ModalComponent>
    );
  };
  console.log('render root');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {renderModal()}
      <ModalNavigationHeaderBar
        text={{ title: 'Tạo mới đếm ngược' }}
        onBack={onHandleBack}
        onConfirm={handleSubmit(onHandleConfirm)}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <View style={[styles.group, { backgroundColor: colors.surface }]}>
            <InputField
              name={FIELD_NAME.NAME}
              control={control}
              style={styles.inputName}
              placeholder="Tên"
            />
            <InputField
              name={FIELD_NAME.DESCRIPTION}
              control={control}
              style={styles.inputDesc}
              placeholder="Chi tiết"
              multiline
            />
          </View>
          <View style={[styles.group, styles.groupRow]}>
            <View
              style={[
                styles.category,
                styles.groupChild,
                { backgroundColor: colors.surface },
              ]}
            >
              <Category {...IconSize.addReminder} fill={colors.text} />
              <Text style={[styles.textSound, { color: colors.text }]}>
                Danh mục
              </Text>
            </View>
            <View
              style={[
                styles.colorPicker,
                styles.groupChild,
                { backgroundColor: colors.surface },
              ]}
            >
              <Text style={[{ color: colors.text }]}>Hihi</Text>
            </View>
            <View
              style={[
                styles.sound,
                styles.groupChild,
                { backgroundColor: colors.surface },
              ]}
            >
              <AddIcon {...IconSize.addReminder} fill={colors.text} />
              <Text style={[styles.textSound, { color: colors.text }]}>
                Âm báo
              </Text>
            </View>
          </View>
          <View style={[styles.group, { backgroundColor: colors.surface }]}>
            <View style={styles.groupChildRow}>
              <Text style={[{ color: colors.text }, styles.textTime]}>
                Thời gian?
              </Text>
              <View style={styles.dateTimeArea}>
                <Pressable
                  style={[
                    styles.dateTimePicker,
                    { backgroundColor: colors.background },
                  ]}
                  onPress={() => onHandleOpenDateTimePickerModal('date')}
                >
                  <Text style={[styles.dateTimeText, { color: colors.text }]}>
                    {targetDateRender}
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.dateTimePicker,
                    { backgroundColor: colors.background },
                  ]}
                  onPress={() => onHandleOpenDateTimePickerModal('time')}
                >
                  <Text style={[styles.dateTimeText, { color: colors.text }]}>
                    {targetTimeRender}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.group, { backgroundColor: colors.surface }]}>
            <View style={[styles.groupChildRow]}>
              <Text style={[{ color: colors.text }, styles.textTime]}>
                Lặp lại?
              </Text>
              <SwitchField name="isLoop" control={control} />
            </View>
            {isRepeat && (
              <SegmentedControlField
                name={FIELD_NAME.REPEAT}
                control={control}
                style={styles.segmentedControl}
                values={['Hằng ngày', 'Hằng tuần', 'Hàng tháng', 'Hàng tháng']}
              />
            )}
          </View>
          <View style={[styles.group, { backgroundColor: colors.surface }]}>
            <View style={[styles.groupChildRow]}>
              <Text style={[{ color: colors.text }, styles.textTime]}>
                Thông báo?
              </Text>
              <SwitchField name="isReminder" control={control} />
            </View>
            {isReminder && (
              <SegmentedControlField
                name={FIELD_NAME.REMINDER}
                control={control}
                style={styles.segmentedControl}
                values={['Hằng ngày', 'Hằng tuần', 'Hàng tháng', 'Hàng tháng']}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default memo(AddReminder, isEqual);
