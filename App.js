import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import { store } from "./src/state/store";
//Layout
import Auth from "./src/layout/Auth.layout";
import Register from "./src/layout/Register.layout";
import Drawer from "./src/navigation/Drawer";
export default function App() {
  const Stack = createStackNavigator();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let [fontsLoaded] = useFonts({
    DMSans: require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded || isLoading) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          {!isLoggedIn ? (
            <Stack.Navigator
              initialRouteName="Auth"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Auth" component={Auth} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          ) : (
            <Drawer />
          )}
        </NavigationContainer>
      </Provider>
    );
  }
}
