import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../stacks/Home.stack";
import ProfileStack from "../stacks/Profile.stack";
import NewPost from "../stacks/NewPost.stack";
import TransactionStack from "../stacks/Transaction.stack";

import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#EAEAEA",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: { height: 60, ...styles.shadow },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IonIcon
                name={focused ? "home" : "home-outline"}
                style={{
                  color: "#2E3A59",
                }}
                size={25}
              />
              <Text style={{ color: "#2E3A59", ...styles.text }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IonIcon
                name={focused ? "card" : "card-outline"}
                style={{
                  color: "#2E3A59",
                }}
                size={25}
              />
              <Text style={{ color: "#2E3A59", ...styles.text }}>
                Transaction
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NewPost"
        component={NewPost}
        options={{
          tabBarIcon: ({ focused }) => (
            <IonIcon
              name="add-outline"
              style={{ color: "#2E3A59" }}
              size={40}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Home4"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IonIcon
                name={focused ? "reader" : "reader-outline"}
                style={{
                  color: "#2E3A59",
                }}
                size={25}
              />
              <Text style={{ color: "#2E3A59", ...styles.text }}>Notes</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IonIcon
                name={focused ? "person-circle" : "person-circle-outline"}
                style={{
                  color: "#2E3A59",
                }}
                size={25}
              />
              <Text style={{ color: "#2E3A59", ...styles.text }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#192038",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
});
