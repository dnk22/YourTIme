import React, { memo, useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {
  SegmentedControlField,
  InputField,
  DateTimeField,
  ModalNavigationHeaderBar,
  ModalComponent,
  SwitchField,
} from 'components/index';
import styles from './styles';
import isEqual from 'react-fast-compare';
import { NavigationProp } from '@react-navigation/native';
import { useCustomTheme } from 'resources/theme';
import AddIcon from 'assets/svg/icon-sound.svg';
import Category from 'assets/svg/icon-view-card.svg';
import { IconSize } from 'share/scale';
import { useForm } from 'react-hook-form';
import { IReminderCategory, TAddReminder, TReminder } from '../type';
import { formatDateLocal, randomUniqueId } from 'utils/index';
import { useAppDispatch } from 'store/index';
import { addNewReminder } from 'store/reminder/reminder.slice';
import { FIELD_NAME } from '../const';
import ReminderCategory from '../ReminderCategory';
import { hapticFeedback } from 'utils/haptic';

interface IAddReminderProps {
  navigation: NavigationProp<any, any>;
}
const defaultValues: TAddReminder = {
  name: '',
  description: '',
  targetDateTime: new Date(),
  isRepeat: false,
  isReminder: true,
  reminder: 0,
};

function AddReminder({ navigation }: IAddReminderProps) {
  const { colors } = useCustomTheme();
  const dispatch = useAppDispatch();
  const [isModalShowType, setIsModalShowType] = useState<string>('');

  const isDateModal = useMemo(
    () => isModalShowType === 'date',
    [isModalShowType],
  );
  const isTimeModal = useMemo(
    () => isModalShowType === 'time',
    [isModalShowType],
  );
  const isCategoryModal = useMemo(
    () => isModalShowType === 'category',
    [isModalShowType],
  );
  // const isBellModal = useMemo(
  //   () => isModalShowType === 'bell',
  //   [isModalShowType],
  // );

  const { control, handleSubmit, getValues, setValue, watch } =
    useForm<TReminder>({
      defaultValues,
    });

  // get form values
  const { targetDateTime, categoryId, categoryName } = getValues();
  const { isRepeat, isReminder } = watch();
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

  const onToggleModal = (type: string) => {
    setIsModalShowType(type);
  };

  const onHandleCategorySelect = useCallback(
    ({ id, name }: IReminderCategory) => {
      setValue('categoryId', id);
      setValue('categoryName', name);
    },
    [setValue],
  );

  const renderDateTimePickerModal = useMemo(() => {
    return (
      <ModalComponent
        isVisible={isDateModal || isTimeModal}
        onToggleModal={() => onToggleModal('')}
      >
        <DateTimeField
          name={FIELD_NAME.TARGET_DATE_TIME}
          control={control}
          locale="vi"
          value={new Date()}
          mode={isDateModal ? 'date' : 'time'}
          display={isDateModal ? 'inline' : 'spinner'}
        />
      </ModalComponent>
    );
  }, [control, isDateModal, isTimeModal]);

  const renderCategoryPickerModal = useMemo(() => {
    return (
      <ModalComponent
        isVisible={isCategoryModal}
        onToggleModal={() => onToggleModal('')}
        isShowClose={false}
        height={'60%'}
      >
        <View style={styles.modalCategoryHeader}>
          <Text style={styles.headerCategoryTitle}>Danh mục của tôi</Text>
          <Pressable
            style={[
              styles.headerCategoryActionButton,
              { backgroundColor: colors.primary },
            ]}
          >
            <Text style={styles.headerCategoryActionText}>Chỉnh sửa</Text>
          </Pressable>
        </View>
        <ReminderCategory
          onPressItem={onHandleCategorySelect}
          isCurrentCategory={categoryId}
          isShowCheckbox
        />
      </ModalComponent>
    );
  }, [categoryId, colors.primary, isCategoryModal, onHandleCategorySelect]);

  // const renderBellPickerModal = useMemo(() => {
  //   return (
  //     <ModalComponent
  //       isVisible={isBellModal}
  //       onToggleModal={() => onToggleModal('')}
  //       isShowClose={false}
  //       height={'60%'}
  //     >
  //       <ReminderCategory />
  //     </ModalComponent>
  //   );
  // }, [isBellModal]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {renderDateTimePickerModal}
      {renderCategoryPickerModal}
      {/* {renderBellPickerModal} */}
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
            <Pressable
              style={[
                styles.category,
                styles.groupChild,
                { backgroundColor: colors.surface },
              ]}
              onPress={() => {
                hapticFeedback();
                setIsModalShowType('category');
              }}
            >
              <Category {...IconSize.addReminder} fill={colors.text} />
              <Text style={[styles.textSound, { color: colors.text }]}>
                {categoryName || 'Danh mục'}
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.colorPicker,
                styles.groupChild,
                { backgroundColor: colors.surface },
              ]}
            >
              <Text style={[{ color: colors.text }]}>Hihi</Text>
            </Pressable>
            <Pressable
              style={[
                styles.sound,
                styles.groupChild,
                { backgroundColor: colors.surface },
              ]}
              onPress={() => setIsModalShowType('bell')}
            >
              <AddIcon {...IconSize.addReminder} fill={colors.text} />
              <Text style={[styles.textSound, { color: colors.text }]}>
                Âm báo
              </Text>
            </Pressable>
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
                  onPress={() => setIsModalShowType('date')}
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
                  onPress={() => setIsModalShowType('time')}
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
              <SwitchField name="isRepeat" control={control} />
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
                Nhắc nhở?
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
