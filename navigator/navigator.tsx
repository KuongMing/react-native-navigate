/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screen/LoginScreen";
import Detail from "../screen/Detail";
import { RootStackParamList } from "../types";
import Detail2 from "../screen/Detail2";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail3 from "../screen/Detail3";
import Detail4 from "../screen/Detail4";
import { Image } from "react-native";
import DataTest from "../screen/DataTest";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen  name="DetailScreen" component={Detail} options={{tabBarIcon:()=>(
      <Image source={require('../assets/home.png')}
      style={{width:30, height:30}}
      resizeMode='stretch'
      ></Image>
    )}}  />  
    <Tab.Screen name="DetailScreen2" component={Detail2}  options={{tabBarIcon:()=>(
      <Image source={require('../assets/compass.png')}
      style={{width:30, height:30}}
      resizeMode='stretch'
      ></Image>
    )}}/>  
    <Tab.Screen name="DetailScreen3" component={Detail3} options={{tabBarIcon:()=>(
      <Image source={require('../assets/maps-and-flags.png')}
      style={{width:30, height:30}}
      resizeMode='stretch'
      ></Image>
    )}}/>  
    <Tab.Screen name="DetailScreen4" component={Detail4}  options={{tabBarIcon:()=>(
      <Image source={require('../assets/user.png')}
      style={{width:30, height:30}}
      resizeMode='stretch'
      ></Image>
    )}}/>  
    </Tab.Navigator>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="TestData" component={DataTest} />

    </Stack.Navigator>
  );
}
