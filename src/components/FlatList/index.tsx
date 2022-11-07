import React, { useCallback, memo } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { PropsFlatList } from './model';
import isEqual from 'react-fast-compare';

const FlatListComponent: PropsFlatList = props => {
  const {
    data,
    renderItem,
    onRefresh,
    onLoadMore,
    maxToRenderPerBatch = 5,
    initialNumToRender = 5,
    showsVerticalScrollIndicator = false,
    showsHorizontalScrollIndicator = false,
  } = props;
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);
  return (
    <FlatList
      {...props}
      data={data}
      keyExtractor={keyExtractor}
      extraData={data}
      keyboardShouldPersistTaps="handled"
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            onRefresh && onRefresh();
          }}
        />
      }
      onEndReachedThreshold={0.5}
      onEndReached={() => onLoadMore && onLoadMore()}
      maxToRenderPerBatch={maxToRenderPerBatch}
      initialNumToRender={initialNumToRender}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
    />
  );
};

export default memo(FlatListComponent, isEqual);
