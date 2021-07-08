import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const NoteStackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen component={Home} name="Home" /> */}
    </Stack.Navigator>
  );
};

export default NoteStackScreen;
