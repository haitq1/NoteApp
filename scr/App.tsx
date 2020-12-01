import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import LoginVM from './screens/Login/LoginVM'

import { store } from './redux/store/store';
import Navigation from './navigation/index';
import TabNavigator from './navigation/tabnav'


const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App
