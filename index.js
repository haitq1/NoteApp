/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './scr/App';
import { name as appName } from './app.json';
import './scr/localization/i18n';

AppRegistry.registerComponent(appName, () => App);