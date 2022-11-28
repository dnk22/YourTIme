import React, { memo, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import isEqual from 'react-fast-compare';
import styles from './styles';
import Item from './Item';
import { AlertItemProps } from 'utils/types';
import { RootState, useAppSelector } from 'store/index';
import { alertSelectors } from 'store/app/app.selector';

export interface AlertSelectionsProps {
  values?: number[];
  onValuesChange?: (item: AlertItemProps) => void;
}

function AlertSelections({
  values = [],
  onValuesChange,
}: AlertSelectionsProps) {
  const [alert, setAlert] = useState<number[]>(values);
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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white' }}>Thông báo?</Text>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {alertSettings.map(item => (
          <Item
            item={item}
            onPress={onHandlePressItem}
            key={item.value}
            defaultValues={alert}
          />
        ))}
      </ScrollView>
      <Pressable style={styles.addItem}>
        <Text>Thêm thông báo khác</Text>
      </Pressable>
    </View>
  );
}

export default memo(AlertSelections, isEqual);
