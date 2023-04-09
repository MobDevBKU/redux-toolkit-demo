import { MainLayout } from "@layouts/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { defaultColor } from "@utils/styles";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const FirstOnboardingScreen: IComponent = () => {
  const navigation = useNavigation();

  return (
    <MainLayout>
      <Text style={styles.heading}>Welcome to Running App</Text>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("@assets/image/onboarding-1.png")}
        />
      </View>
      <View style={styles.wrapperButton}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Authentication" as never);
            }}
          >
            JOIN NOW
          </Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  heading: {
    fontSize: 34,
    color: defaultColor,
    marginTop: 32,
    paddingHorizontal: 72,
    textAlign: "center",
    textAlignVertical: "center",
  },
  slide: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
  },
  wrapperButton: {
    marginBottom: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: 413,
    resizeMode: "contain",
  },
  button: {
    width: 198,
    height: 54,
    backgroundColor: "#2196F3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonText: {
    width: "100%",
    color: "white",
    fontSize: 28,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});
