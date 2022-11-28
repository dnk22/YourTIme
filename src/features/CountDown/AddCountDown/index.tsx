import React, { memo, useState, useMemo } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  InputField,
  DateTimeField,
  ModalNavigationHeaderBar,
  ModalComponent,
  PressableHaptic,
  SvgIcon,
} from 'components/index';
import styles from './styles';
import isEqual from 'react-fast-compare';
import { NavigationProp, useRoute } from '@react-navigation/native';
import { useCustomTheme } from 'resources/theme';
import { useForm } from 'react-hook-form';
import { ICountDownCategory, TAddCountDown, TCountDown } from '../type';
import { formatDateLocal } from 'utils/index';
import { useAppDispatch, useAppSelector } from 'store/index';
import { addOrUpdateCountDown } from 'store/countDown/countDown.slice';
import { FIELD_NAME } from '../constants';
import { CREATE_MODE } from 'utils/constant';
import ColorPicker from 'react-native-color-picker-ios';
import { RootStackScreenProps } from 'navigation/type';
import { countDownSelectors } from 'store/countDown/countDown.selector';
import AlertSelections from 'components/AlertSelections';
import { BellModel, CategoryModal } from './Modal';

interface IAddCountDownProps {
  navigation: NavigationProp<any, any>;
}
const initialAddFormValues: TAddCountDown = {
  name: '',
  description: '',
  targetDateTime: new Date(),
  isReminder: true,
  reminder: 0,
};

function AddCountDown({ navigation }: IAddCountDownProps) {
  const { colors } = useCustomTheme();
  const dispatch = useAppDispatch();
  const [isMode] = useState(CREATE_MODE);
  const [isModalShowType, setIsModalShowType] = useState<string>('');
  const isCreateMode = useMemo(() => isMode === CREATE_MODE, [isMode]);
  const { params } =
    useRoute<RootStackScreenProps<'countDownDetails'>['route']>();

  const title = params?.countDownId
    ? 'Chỉnh sửa đếm ngược'
    : 'Tạo mới đếm ngược';

  const getCountDownById =
    useAppSelector(state =>
      countDownSelectors.selectById(state, params?.countDownId),
    ) || {};

  const { control, handleSubmit, getValues, setValue, watch } =
    useForm<TCountDown>({
      defaultValues: {
        ...initialAddFormValues,
        ...getCountDownById,
      },
    });

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
  const isBellModal = useMemo(
    () => isModalShowType === 'bell',
    [isModalShowType],
  );

  // get form values
  const { color } = watch();
  const { targetDateTime, categoryId, categoryName } = getValues();
  const targetDateRender = useMemo(
    () => formatDateLocal(targetDateTime, 'dd/MM/yyyy'),
    [targetDateTime],
  );
  const targetTimeRender = useMemo(
    () => formatDateLocal(targetDateTime, 'HH:mm'),
    [targetDateTime],
  );

  const onHandleBack = () => {
    navigation.goBack();
  };

  const onHandleSubmit = (data: TCountDown) => {
    dispatch(addOrUpdateCountDown(data));
    navigation.goBack();
  };

  const onToggleModal = (type?: string) => {
    setIsModalShowType(type || '');
  };

  const onHandleCategorySelect = ({ id, name }: ICountDownCategory) => {
    setValue('categoryId', id);
    setValue('categoryName', name);
  };

  const onHandleColorPicker = () => {
    ColorPicker.showColorPicker({ initialColor: colors.primary }, value => {
      setValue('color', value);
    });
  };

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
          accentColor={color || ''}
        />
      </ModalComponent>
    );
  }, [control, isDateModal, isTimeModal]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ModalNavigationHeaderBar
        text={{ title }}
        onBack={onHandleBack}
        onConfirm={handleSubmit(onHandleSubmit)}
      />
      {/* modal render */}
      {renderDateTimePickerModal}
      <CategoryModal
        isVisible={isCategoryModal}
        onToggleModal={onToggleModal}
        categoryId={categoryId}
        onHandleCategorySelect={onHandleCategorySelect}
      />
      <BellModel isVisible={isBellModal} onToggleModal={onToggleModal} />
      {/* end modal render */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <View style={[styles.group, { backgroundColor: colors.surface }]}>
            <InputField
              name={FIELD_NAME.NAME}
              control={control}
              style={[styles.inputName]}
              placeholder="Tên"
              clearButtonMode="always"
              autoFocus={isCreateMode}
            />
            <View
              style={[styles.divider, { backgroundColor: colors.divider }]}
            />
            <InputField
              name={FIELD_NAME.DESCRIPTION}
              control={control}
              style={[styles.inputDesc]}
              placeholder="Chi tiết"
              maxLength={60}
              multiline
              placeholderTextColor="#9999"
            />
          </View>
          <View style={[styles.group, styles.groupRow]}>
            <PressableHaptic
              style={[
                styles.groupChild,
                styles.categoryAndSoundView,
                { backgroundColor: colors.surface },
              ]}
              onPress={() => {
                setIsModalShowType('category');
              }}
            >
              <SvgIcon
                name="category"
                style={styles.icon}
                size={20}
                color={color}
              />
              <Text style={[styles.label, { color: colors.text }]}>
                {categoryName || 'Danh mục'}
              </Text>
            </PressableHaptic>
            <PressableHaptic
              style={[
                styles.groupChild,
                styles.colorView,
                { backgroundColor: colors.surface },
              ]}
              onPress={onHandleColorPicker}
            >
              <View style={[styles.colorPicker, { backgroundColor: color }]} />
            </PressableHaptic>
            <PressableHaptic
              style={[
                styles.groupChild,
                styles.categoryAndSoundView,
                { backgroundColor: colors.surface },
              ]}
              onPress={() => setIsModalShowType('bell')}
            >
              <SvgIcon
                name="bellBadge"
                style={styles.icon}
                size={20}
                color={color}
              />
              <Text style={[styles.label, { color: colors.text }]}>Âm báo</Text>
            </PressableHaptic>
          </View>
          <View style={[styles.group, { backgroundColor: colors.surface }]}>
            <View style={styles.groupChildRow}>
              <Text style={[styles.label, { color: colors.text }]}>
                Thời gian?
              </Text>
              <View style={styles.groupChildRow}>
                <PressableHaptic
                  style={[
                    styles.dateTimePicker,
                    { backgroundColor: colors.background },
                  ]}
                  onPress={() => setIsModalShowType('date')}
                >
                  <Text style={[styles.dateTimeText, { color: colors.text }]}>
                    {targetDateRender}
                  </Text>
                </PressableHaptic>
                <PressableHaptic
                  style={[
                    styles.dateTimePicker,
                    { backgroundColor: colors.background },
                  ]}
                  onPress={() => setIsModalShowType('time')}
                >
                  <Text style={[styles.dateTimeText, { color: colors.text }]}>
                    {targetTimeRender}
                  </Text>
                </PressableHaptic>
              </View>
            </View>
          </View>
          <AlertSelections />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default memo(AddCountDown, isEqual);
