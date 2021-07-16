import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NoteList from "../layout/NoteList.layout";
import CreateNote from "../layout/CreateNote.layout";

const NoteStackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="NoteList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={NoteList} name="NoteList" />
      <Stack.Screen component={CreateNote} name="CreateNote" />
    </Stack.Navigator>
  );
};

export default NoteStackScreen;
