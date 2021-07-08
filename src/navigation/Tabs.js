import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../stacks/Home.stack";
import ProfileStack from "../stacks/Profile.stack";
import NewPost from "../stacks/NewPost.stack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Home2" component={HomeStack} />
      <Tab.Screen name="NewPost" component={NewPost} />
      <Tab.Screen name="Home4" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default Tabs;
