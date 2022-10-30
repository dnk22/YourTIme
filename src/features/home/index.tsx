import HomeHeaderBar from './HomeHeaderBar';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import ListCategory from './ListCategory';
import { useCustomTheme } from 'hooks';

const Home = ({ navigation }) => {
  const [isShowCategory, setIsShowCategory] = useState(false);
  const { colors } = useCustomTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.surface }}>
      <View style={[{ backgroundColor: colors.background }]}>
        <HomeHeaderBar
          setModalVisible={() => setIsShowCategory(!isShowCategory)}
          isModalShow={isShowCategory}
        />
        {isShowCategory && (
          <ListCategory
            isShow={isShowCategory}
            setShowHide={setIsShowCategory}
            colors={colors}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
