import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectCategory from "../layout/SelectCategory.layout";
import Post from "../layout/Post.layout";
const NewPostStackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SelectCategory"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={SelectCategory} name="SelectCategory" />
      <Stack.Screen component={Post} name="Post" />
    </Stack.Navigator>
  );
};

export default NewPostStackScreen;
