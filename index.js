import { AppRegistry, Platform } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
/* eslint-disable import/no-unused-modules */
/* eslint-disable @typescript-eslint/no-unused-expressions */

if (Platform.OS === 'ios') {
  // Polyfills required to use Intl with Hermes engine
  require('@formatjs/intl-getcanonicallocales/polyfill').default;
  require('@formatjs/intl-locale/polyfill').default;
  require('@formatjs/intl-pluralrules/polyfill').default;
  require('@formatjs/intl-pluralrules/locale-data/en').default;
  require('@formatjs/intl-numberformat/polyfill').default;
  require('@formatjs/intl-numberformat/locale-data/en').default;
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/locale-data/en');
  require('@formatjs/intl-relativetimeformat/locale-data/vi');
}
AppRegistry.registerComponent(appName, () => App);
