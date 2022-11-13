import React, { memo } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Platform,
} from 'react-native';
import isEqual from 'react-fast-compare';
import IconCloseCircle from 'assets/svg/icon-close-circle.svg';
import { useCustomTheme } from 'resources/theme';
import styles from './styles';

interface IModalNavigationHeaderBarProps {
  text: {
    title?: string;
    confirm?: string;
  };
  onBack: () => void;
  onConfirm?: () => void;
}
function ModalNavigationHeaderBar({
  text,
  onBack,
  onConfirm,
}: IModalNavigationHeaderBarProps) {
  const { colors } = useCustomTheme();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={[{ color: colors.text }, styles.titleText]}>
            {text.title || 'Modal'}
          </Text>
        </View>
        <TouchableOpacity style={styles.right} onPress={onBack}>
          <IconCloseCircle width={24} height={24} fill={colors.text} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={styles.actionContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        {onConfirm && (
          <Pressable
            onPress={onConfirm}
            style={[styles.actionConfirm, { backgroundColor: colors.primary }]}
          >
            <Text style={styles.textButtonConfirm}>Xác nhận</Text>
          </Pressable>
        )}
      </KeyboardAvoidingView>
    </>
  );
}

export default memo(ModalNavigationHeaderBar, isEqual);
