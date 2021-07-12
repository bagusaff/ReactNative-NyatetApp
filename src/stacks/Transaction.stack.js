import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Income from "../layout/Income.layout";
import Outcome from "../layout/Outcome.layout";
const TransactionStackScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Income"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={Income} name="Income" />
      <Stack.Screen component={Outcome} name="Outcome" />
    </Stack.Navigator>
  );
};

export default TransactionStackScreen;
