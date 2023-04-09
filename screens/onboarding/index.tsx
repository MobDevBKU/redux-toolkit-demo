import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View } from "react-native";

import { AuthScreen } from "../AuthScreen";
import { HomeScreen } from "../HomeScreen";
import { FirstOnboardingScreen } from "./FirstOnboardingScreen";
import { SecondOnboardingScreen } from "./SecondOnboardingScreen";
import { ThirdOnboardingScreen } from "./ThirdOnboardingScreen";

const Tab = createBottomTabNavigator();

export const OnboardingScreen: IComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: styles.tabBar,
        tabBarBadgeStyle: {
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        },
      }}
    >
      <Tab.Screen
        name="FirstOnboardingScreen"
        component={FirstOnboardingScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require("@assets/image/Point.png")}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="SecondOnboardingScreen"
        component={SecondOnboardingScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require("@assets/image/Point.png")}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ThirdOnboardingScreen"
        component={ThirdOnboardingScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require("@assets/image/Point.png")}
              />
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    border: "none",
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  wrapper: {
    marginTop: 8,
  },
  image: {
    width: 8,
    height: 8,
  },
});
