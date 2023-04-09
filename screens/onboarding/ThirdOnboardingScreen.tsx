import { MainLayout } from "@layouts/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { commonStylesOfOnBoardingScreen } from "@utils/styles";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ThirdOnboardingScreen: IComponent = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("@assets/image/onboarding-3.png")}
        />
      </View>
      <Text style={styles.heading}>Competition.</Text>
      <Text style={styles.subHeading}>Be the champion at local marathons.</Text>
      <View style={styles.wrapperButton}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Authentication" as never);
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

//temporarily cast as any
// TODO: find exactly this type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles = StyleSheet.create(commonStylesOfOnBoardingScreen as any);
