import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

function SoundAlert() {
  return (
    <View>
      <Pressable style={styles.soundItem}>
        <Text>pingPong</Text>
      </Pressable>
      <Pressable style={styles.soundItem}>
        <Text>pingPong</Text>
      </Pressable>
    </View>
  );
}

export default SoundAlert;
