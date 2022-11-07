import React, { memo, useMemo } from 'react';
import { Text as RNText } from 'react-native';
import isEqual from 'react-fast-compare';
import { useTranslation } from 'react-i18next';
import { TTextProps } from './type';

function Text({ text, children, t18n, t18nOptions }: TTextProps) {
  // setup translation
  const [t] = useTranslation();
  const i18nText = useMemo(
    () => t18n && t(t18n, t18nOptions),
    [t18n, t18nOptions, t],
  );
  const content = useMemo(
    () => i18nText || text || children,
    [i18nText, text, children],
  );
  return <RNText allowFontScaling={false}>{content}</RNText>;
}

export default memo(Text, isEqual);
