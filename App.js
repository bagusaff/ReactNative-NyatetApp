import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

//Layout
import Home from "./src/layout/Home.layout";
import Auth from "./src/layout/Auth.layout";
import Welcome from "./src/layout/Welcome.layout";

export default function App() {
  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    DMSans: require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Auth" component={Auth} options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
