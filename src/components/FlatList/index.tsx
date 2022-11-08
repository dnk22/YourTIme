import React, { useCallback, memo, useMemo } from 'react';
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
  const keyExtractor = useCallback((item: any) => item.id, []);
  const renderRefreshControl = useMemo(
    () => (
      <RefreshControl
        refreshing={false}
        onRefresh={() => {
          onRefresh && onRefresh();
        }}
      />
    ),
    [onRefresh],
  );

  // const viewConfigRef = useRef({
  //   waitForInteraction: true,
  //   viewAreaCoveragePercentThreshold: 95,
  // });
  return (
    <FlatList
      {...props}
      data={data}
      keyExtractor={keyExtractor}
      extraData={data}
      keyboardShouldPersistTaps="handled"
      renderItem={renderItem}
      refreshControl={renderRefreshControl}
      onEndReachedThreshold={0.5}
      onEndReached={() => onLoadMore && onLoadMore()}
      // viewabilityConfig={viewConfigRef.current}
      maxToRenderPerBatch={maxToRenderPerBatch}
      initialNumToRender={initialNumToRender}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
    />
  );
};

export default memo(FlatListComponent, isEqual);
