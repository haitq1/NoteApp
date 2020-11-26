import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import HomeVM from '../screens/Home/HomeVM'
import LoginVM from '../screens/Login/LoginVM'
interface Props {
  isAuthenticated: boolean;
}
const Navigation = (props: Props) => {
  const Stack = createStackNavigator();
  const { isAuthenticated } = props;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeVM} />
          : <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginVM} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.home.isAuthenticated
})

export default connect(mapStateToProps)(Navigation)