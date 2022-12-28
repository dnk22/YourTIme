import React, { memo, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import isEqual from 'react-fast-compare';
import styles from './styles';
import Item from './Item';
import { AlertItemProps } from 'utils/types';
import { RootState, useAppDispatch, useAppSelector } from 'store/index';
import { alertSelectors } from 'store/app/app.selector';
import { useCustomTheme } from 'resources/theme';
import Form, { onChangeType } from './Form';
import { addOrEditAlert } from 'store/app/app.slice';

export interface AlertSelectionsProps {
  values?: number[];
  dateValidation: Date | number;
  onValuesChange?: (item: number[]) => void;
}

function AlertSelections({ values = [0], dateValidation, onValuesChange }: AlertSelectionsProps) {
  const { colors } = useCustomTheme();
  const dispatch = useAppDispatch();
  const [alert, setAlert] = useState<number[]>(values);

  const isItemActive = (value: number) => alert.includes(value);
  const alertSettingsData = useAppSelector((state: RootState) => alertSelectors.selectAll(state));

  useEffect(() => {
    onValuesChange && onValuesChange(alert);
  }, [alert]);

  const onHandlePressItem = (item: AlertItemProps) => {
    const { value } = item;
    if (alert.includes(value)) {
      const newValue = alert.filter(x => x !== value);
      setAlert(newValue);
    } else {
      setAlert([...alert, value]);
    }
  };

  const onHandleFormChange = (data: onChangeType) => {
    if (alertSettingsData && alertSettingsData.length <= 5) {
      dispatch(addOrEditAlert(data));
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={[styles.header, { borderColor: colors.divider }]}>
        <Text style={{ color: colors.text }}>Thông báo?</Text>
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {alertSettingsData.map(item => (
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
      <Form dateValidation={dateValidation} onChange={onHandleFormChange} />
    </View>
  );
}

export default memo(AlertSelections, isEqual);
