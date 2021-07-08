import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../layout/Home.layout";

const HomeStackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
