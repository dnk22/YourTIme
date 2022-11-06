import React, { memo, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Switch,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import isEqual from 'react-fast-compare';
import { NavigationProp } from '@react-navigation/native';
import { useCustomTheme } from 'resources/theme';
import ModalNavigationHeaderBar from 'components/ModalNavigationHeaderBar';
import AddIcon from 'assets/svg/icon-sound.svg';
import Category from 'assets/svg/icon-view-card.svg';
import IconCloseCircle from 'assets/svg/icon-close-circle.svg';
import { IconSize } from 'share/scale';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import styles from './styles';
import { useForm } from 'react-hook-form';
import InputField from 'components/InputField';
import { FormAddReminder } from './type';

interface IAddReminderProps {
  navigation: NavigationProp<any, any>;
}
function AddReminder({ navigation }: IAddReminderProps) {
  const { colors } = useCustomTheme();
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const isPickerType = useRef<any>('date');

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAddReminder>({
    defaultValues: {
      name: '',
      descriptions: '',
    },
  });

  const onHandleBack = () => {
    navigation.goBack();
  };

  const onHandleConfirm = (data: FormAddReminder) => {
    console.log(data);
    // navigation.goBack();
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    console.log(currentDate);
  };

  const onHandleDateTimeClick = (type: string): void => {
    isPickerType.current = type;
    onToggleModal();
  };

  const onToggleModal = () => {
    setIsModalShow(!isModalShow);
  };

  const renderModal = () => {
    const { current } = isPickerType;
    return (
      <Modal
        isVisible={isModalShow}
        backdropColor="#6e768142"
        style={styles.modal}
        backdropTransitionOutTiming={0}
        onBackdropPress={onToggleModal}
        useNativeDriver
        useNativeDriverForBackdrop
      >
        <View style={[styles.modalView, { backgroundColor: colors.surface }]}>
          <TouchableOpacity style={styles.modalAction} onPress={onToggleModal}>
            <IconCloseCircle {...IconSize.addReminder} fill={colors.text} />
          </TouchableOpacity>
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={current}
            locale="vi"
            display={current === 'date' ? 'inline' : 'spinner'}
            onChange={onChange}
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
              name="name"
              control={control}
              style={styles.inputName}
              placeholder="Tên"
            />
            <InputField
              name="descriptions"
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
                    Ngày 12/3/4
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
                    24:24
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
              <Switch
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            {isEnabled && (
              <SegmentedControl
                style={styles.loop}
                values={['Hằng ngày', 'Hằng tuần', 'Hàng tháng', 'Hàng tháng']}
                selectedIndex={1}
                onChange={event => {}}
              />
            )}
          </View>
          <View style={[styles.group, { backgroundColor: colors.surface }]}>
            <View style={[styles.groupChildRow]}>
              <Text style={[{ color: colors.text }, styles.textTime]}>
                Thông báo?
              </Text>
              <Switch
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            {isEnabled && (
              <SegmentedControl
                style={styles.loop}
                values={['Hằng ngày', 'Hằng tuần', 'Hàng tháng', 'Hàng tháng']}
                selectedIndex={1}
                onChange={event => {}}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default memo(AddReminder, isEqual);
