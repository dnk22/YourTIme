import React, { memo } from 'react';
import { DateTimeField, ModalComponent, SoundAlert } from 'components/index';
import { Text, View } from 'react-native';
import CountDownCategory from '../CountDownCategory';
import styles from './styles';
import isEqual from 'react-fast-compare';
import { ICountDownCategory } from '../type';
import { FIELD_NAME } from '../constants';

interface ModalProps {
  isVisible?: boolean;
  onToggleModal: () => void;
}

interface CategoryModalProps extends ModalProps {
  onHandleCategorySelect: (item: ICountDownCategory) => void;
  categoryId?: string;
}

interface DateTimeModalProps extends ModalProps {
  isDateModal: boolean;
  isTimeModal: boolean;
  control: any;
}

export const DateTimeModal = memo(
  ({
    isDateModal,
    isTimeModal,
    onToggleModal,
    control,
  }: DateTimeModalProps) => {
    return (
      <ModalComponent
        isVisible={isDateModal || isTimeModal}
        onToggleModal={onToggleModal}
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
  },
  isEqual,
);

export const BellModel = memo(({ isVisible, onToggleModal }: ModalProps) => {
  return (
    <ModalComponent
      isVisible={isVisible}
      onToggleModal={onToggleModal}
      isShowClose={false}
      height={'40%'}
    >
      <View style={styles.modalCategoryHeader}>
        <Text style={styles.headerCategoryTitle}>Chọn âm báo</Text>
      </View>
      <SoundAlert />
    </ModalComponent>
  );
}, isEqual);

export const CategoryModal = memo(
  ({
    isVisible,
    onToggleModal,
    onHandleCategorySelect,
    categoryId,
  }: CategoryModalProps) => {
    return (
      <ModalComponent
        isVisible={isVisible}
        onToggleModal={onToggleModal}
        isShowClose={false}
        height={'60%'}
      >
        <View style={styles.modalCategoryHeader}>
          <Text style={styles.headerCategoryTitle}>Danh mục của tôi</Text>
          {/* <PressableHaptic
              style={[
                styles.headerCategoryActionButton,
                { backgroundColor: colors.primary },
              ]}
            >
              <Text style={styles.headerCategoryActionText}>Chỉnh sửa</Text>
            </PressableHaptic> */}
        </View>
        <CountDownCategory
          isShowOtherCategory={false}
          onPressItem={onHandleCategorySelect}
          isCurrentCategory={categoryId}
          isShowCheckbox
        />
      </ModalComponent>
    );
  },
  isEqual,
);
