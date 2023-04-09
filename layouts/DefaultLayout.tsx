import { View } from "react-native";

export const DefaultLayout: IComponent = ({ children }) => {
  return (
    <View>
      <>{children}</>
    </View>
  );
};
