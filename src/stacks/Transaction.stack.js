import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Income from "../layout/Income.layout";
import Outcome from "../layout/Outcome.layout";
import SelectCategory from "../layout/SelectCategory.layout";
import Post from "../layout/Post.layout";
const TransactionStackScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Income"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={Income} name="Income" />
      <Stack.Screen component={Outcome} name="Outcome" />
      <Stack.Screen component={SelectCategory} name="SelectCategory" />
      <Stack.Screen component={Post} name="Post" />
    </Stack.Navigator>
  );
};

export default TransactionStackScreen;
