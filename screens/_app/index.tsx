import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "@screens/AuthScreen";
import { DetailScreen } from "@screens/DetailScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { OnboardingScreen } from "@screens/onboarding";
import React from "react";
import { Provider } from "react-redux";
import store from "redux/store";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Authentication"
            component={AuthScreen}
            options={{ headerShown: true, headerBackVisible: false }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: true, headerBackVisible: false }}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
