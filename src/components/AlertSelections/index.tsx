import React, { memo, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import isEqual from 'react-fast-compare';
import styles from './styles';
import Item from './Item';
import { AlertItemProps } from 'utils/types';
import { RootState, useAppSelector } from 'store/index';
import { alertSelectors } from 'store/app/app.selector';
import { useCustomTheme } from 'resources/theme';
import Form from './Form';

export interface AlertSelectionsProps {
  values?: number[];
  onValuesChange?: (item: AlertItemProps) => void;
}

function AlertSelections({
  values = [0],
  onValuesChange,
}: AlertSelectionsProps) {
  const { colors } = useCustomTheme();
  const [alert, setAlert] = useState<number[]>(values);
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const alertSettings = useAppSelector((state: RootState) =>
    alertSelectors.selectAll(state),
  );

  const onHandlePressItem = (item: AlertItemProps) => {
    const { value } = item;
    if (alert.includes(value)) {
      const newValue = alert.filter(x => x !== value);
      setAlert(newValue);
    } else {
      setAlert([...alert, value]);
    }
  };

  const isItemActive = (value: number) => alert.includes(value);

  const onHandleAddAlert = () => {
    setIsShowForm(!isShowForm);
  };

  const onDateTimeChanges = value => {
    console.log(value);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={[styles.header, { borderColor: colors.divider }]}>
        <Text style={{ color: colors.text }}>Thông báo?</Text>
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {alertSettings.map(item => (
            <Item
              item={item}
              onPress={onHandlePressItem}
              key={item.value}
              isActive={isItemActive(item.value)}
              colors={colors}
            />
          ))}
        </ScrollView>
      </View>
      {isShowForm && (
        <Form onValueChange={onDateTimeChanges} borderColor={colors.divider} />
      )}
      <Pressable
        style={[styles.addItem, { borderColor: colors.divider }]}
        onPress={onHandleAddAlert}
      >
        <Text style={{ color: colors.text }}>Thêm thông báo khác</Text>
      </Pressable>
    </View>
  );
}

export default memo(AlertSelections, isEqual);
