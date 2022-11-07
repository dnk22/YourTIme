import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { IModalComponentProps } from './type';
import { styles } from './styles';
import IconCloseCircle from 'assets/svg/icon-close-circle.svg';
import { IconSize } from 'share/scale';
import { useCustomTheme } from 'resources/theme';
import isEqual from 'react-fast-compare';

const defaultProps = {
  isVisible: false,
};

const ModalComponent = (props: IModalComponentProps) => {
  const { isVisible, onToggleModal, style, children } = props;
  const { colors } = useCustomTheme();
  return (
    <Modal
      isVisible={isVisible}
      backdropColor="#6e768142"
      style={[styles.modal, style]}
      animationInTiming={400}
      animationOutTiming={400}
      hideModalContentWhileAnimating
      onBackdropPress={onToggleModal}
      useNativeDriver
      useNativeDriverForBackdrop
      {...props}
    >
      <View style={[styles.modalView, { backgroundColor: colors.surface }]}>
        <TouchableOpacity style={styles.modalAction} onPress={onToggleModal}>
          <IconCloseCircle {...IconSize.addReminder} fill={colors.text} />
        </TouchableOpacity>
        {children}
      </View>
    </Modal>
  );
};

ModalComponent.defaultProps = defaultProps;
export default memo(ModalComponent, isEqual);
