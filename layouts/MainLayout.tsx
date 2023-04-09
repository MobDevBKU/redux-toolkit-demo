import { StyleSheet, View } from "react-native";

export const MainLayout: IComponent = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    height: "100%",
    flex: 1,
  },
});
