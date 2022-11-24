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
import { useCustomTheme } from 'resources/theme';
import styles from './styles';
import SvgIcon from '../SvgIcon';

interface IModalNavigationHeaderBarProps {
  text: {
    title?: string;
    confirm?: string;
  };
  onBack?: () => void;
  onConfirm?: () => void;
}

function ModalNavigationHeaderBar({
  text,
  onBack,
  onConfirm,
}: IModalNavigationHeaderBarProps) {
  const { colors } = useCustomTheme();
  const titleStyle = !onBack ? 'center' : 'left';
  return (
    <>
      <View style={styles.container}>
        <View style={styles.center}>
          <Text
            style={[
              { color: colors.text, textAlign: titleStyle },
              styles.titleText,
            ]}
          >
            {text.title || 'Modal'}
          </Text>
        </View>
        {onBack && (
          <TouchableOpacity style={styles.right} onPress={onBack}>
            <SvgIcon name="closeCircle" />
          </TouchableOpacity>
        )}
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
