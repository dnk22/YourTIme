import React, { memo } from 'react';
import { ModalComponent, SoundAlert } from 'components/index';
import { Text, View } from 'react-native';
import CountDownCategory from '../CountDownCategory';
import styles from './styles';
import isEqual from 'react-fast-compare';
import { ICountDownCategory } from '../type';

interface ModalProps {
  isVisible?: boolean;
  onToggleModal: () => void;
}

interface CategoryModalProps extends ModalProps {
  onHandleCategorySelect: (item: ICountDownCategory) => void;
  categoryId?: string;
}

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
  ({ isVisible, onToggleModal, onHandleCategorySelect, categoryId }: CategoryModalProps) => {
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
