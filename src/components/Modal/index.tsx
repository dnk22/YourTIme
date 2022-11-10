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
  isShowClose: true,
};

const ModalComponent = (props: IModalComponentProps) => {
  const { isVisible, isShowClose, onToggleModal, style, children, height } =
    props;
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
      animationIn="zoomInUp"
      animationOut="zoomOut"
      {...props}
    >
      <View
        style={[styles.modalView, { backgroundColor: colors.surface, height }]}
      >
        {isShowClose && (
          <TouchableOpacity style={styles.modalAction} onPress={onToggleModal}>
            <IconCloseCircle {...IconSize.addReminder} fill={colors.text} />
          </TouchableOpacity>
        )}
        {children}
      </View>
    </Modal>
  );
};

ModalComponent.defaultProps = defaultProps;
export default memo(ModalComponent, isEqual);
