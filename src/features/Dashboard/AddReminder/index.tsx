import React, { memo, useRef, useState, useMemo } from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import isEqual from 'react-fast-compare';
import { NavigationProp } from '@react-navigation/native';
import { useCustomTheme } from 'resources/theme';
import AddIcon from 'assets/svg/icon-sound.svg';
import Category from 'assets/svg/icon-view-card.svg';
import IconCloseCircle from 'assets/svg/icon-close-circle.svg';
import { IconSize } from 'share/scale';
import Modal from 'react-native-modal';
import styles from './styles';
import { useForm } from 'react-hook-form';
import { TReminder } from '../type';
import { formatDateLocal } from 'utils/date';
import { useAppDispatch } from 'store/index';
import {
  SegmentedControlField,
  Switch,
  InputField,
  DateTimeField,
  ModalNavigationHeaderBar,
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
  const isPickerType = useRef<any>('date');
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [isReminder, setIsReminder] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { control, handleSubmit, getValues, setValue } = useForm<TReminder>({
    defaultValues,
  });
  const targetDateTime = getValues('targetDateTime');
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
      id: "'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'",
      name: 'Chúc mừng năm mới',
      description: 'Năm mới 2023',
      category: 'Ngày lễ',
      targetDateTime: new Date('2023-01-01').toString(),
      isRepeat: true,
      repeat: 'Hàng ngày',
      isReminder: true,
      reminder: '1',
      color: '#E7F6F2',
      bell: 'string',
      isImportant: false,
      dateCreated: new Date().toString(),
    };

    dispatch(addNewReminder(result));
    // navigation.goBack();
  };

  const onHandleDateTimeClick = (type: string): void => {
    isPickerType.current = type;
    onToggleModal();
  };

  const onToggleModal = () => {
    setIsModalShow(!isModalShow);
  };

  const onHandleLoopChange = (value: boolean) => {
    if (!value) {
      setValue('repeat', value);
    }
    setIsLoop(value);
  };
  const onHandleReminderChange = (value: boolean) => {
    if (!value) {
      setValue('reminder', value);
    }
    setIsReminder(value);
  };

  const renderModal = () => {
    const { current } = isPickerType;
    return (
      <Modal
        isVisible={isModalShow}
        backdropColor="#6e768142"
        style={styles.modal}
        animationInTiming={400}
        animationOutTiming={400}
        hideModalContentWhileAnimating
        onBackdropPress={onToggleModal}
        useNativeDriver
        useNativeDriverForBackdrop
      >
        <View style={[styles.modalView, { backgroundColor: colors.surface }]}>
          <TouchableOpacity style={styles.modalAction} onPress={onToggleModal}>
            <IconCloseCircle {...IconSize.addReminder} fill={colors.text} />
          </TouchableOpacity>
          <DateTimeField
            name={FIELD_NAME.TARGET_DATE_TIME}
            control={control}
            locale="vi"
            value={new Date()}
            mode={current}
            display={current === 'date' ? 'inline' : 'spinner'}
          />
        </View>
      </Modal>
    );
  };

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
                  onPress={() => onHandleDateTimeClick('date')}
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
                  onPress={() => onHandleDateTimeClick('time')}
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
              <Switch value={isLoop} onValueChange={onHandleLoopChange} />
            </View>
            {isLoop && (
              <SegmentedControlField
                name={FIELD_NAME.REPEAT}
                control={control}
                style={styles.loop}
                values={['Hằng ngày', 'Hằng tuần', 'Hàng tháng', 'Hàng tháng']}
              />
            )}
          </View>
          <View style={[styles.group, { backgroundColor: colors.surface }]}>
            <View style={[styles.groupChildRow]}>
              <Text style={[{ color: colors.text }, styles.textTime]}>
                Thông báo?
              </Text>
              <Switch
                value={isReminder}
                onValueChange={onHandleReminderChange}
              />
            </View>
            {isReminder && (
              <SegmentedControlField
                name={FIELD_NAME.REMINDER}
                control={control}
                style={styles.loop}
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
