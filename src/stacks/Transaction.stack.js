import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const TransactionStackScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen component={Profile} name="Profile" /> */}
    </Stack.Navigator>
  );
};

export default TransactionStackScreen;
