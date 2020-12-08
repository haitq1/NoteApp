import * as React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import HomeVM from "../screens/Home/HomeVM";
import AccountScreen from "../screens/Account/account";
import SettingsScreen from "../screens/Settings/settings";
import RewardScreen from "../screens/Reward/reward";
import { createStackNavigator } from "@react-navigation/stack";
import GiftCodeScreen from "../screens/Giftcode/giftcode";

const HomeStack = createStackNavigator();

function RewardStackScreen() {
  const { t } = useTranslation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="reward"
        options={{
          title: t("main.reward"),
        }}
        component={RewardScreen}
      />
      <HomeStack.Screen 
      name="giftcode"
      component={GiftCodeScreen} />
    </HomeStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "account") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "reward") {
              iconName = focused ? "trophy" : "trophy-outline";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="home"
          options={{
            title: t("main.home"),
          }}
          component={HomeVM}
        />
        <Tab.Screen
          name="reward"
          options={{
            title: t("main.reward"),
          }}
          component={RewardStackScreen}
        />
        <Tab.Screen
          name="settings"
          options={{
            title: t("main.settings"),
          }}
          component={SettingsScreen}
        />
        <Tab.Screen
          name="account"
          options={{
            title: t("main.account"),
          }}
          component={AccountScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
