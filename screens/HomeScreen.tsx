import { RUNNING_URL } from "@env";
import { useNavigation } from "@react-navigation/core";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  logoutSuccess,
  selectAuthenticationSlice,
} from "redux/authentication/slice";
import {
  clearRunningList,
  selectRunningListSlice,
  setMockRunningList,
} from "redux/features/runningList/slice";
import { fetchRunningListThunk } from "redux/features/runningList/thunks";
import { useAppDispatch, useAppSelector } from "redux/store";

export const HomeScreen: IComponent = ({ navigation }: any) => {
  const { runningList, loading } = useAppSelector(selectRunningListSlice);
  const { accessToken } = useAppSelector(selectAuthenticationSlice);
  const dispatch = useAppDispatch();
  const clearData = () => {
    dispatch(clearRunningList());
  };
  const mockData = () => {
    dispatch(setMockRunningList());
  };
  const navigateToDetail = () => {
    navigation.navigate("Detail", {});
  };
  const fetchData = async () => {
    dispatch(fetchRunningListThunk(accessToken));
  };

  const handleLogout = () => {
    // Dispatch the loginThunk with the email and password as arguments
    dispatch(logoutSuccess());
    navigation.navigate("Authentication", {});
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttons}>
        <Button title="Mock data" onPress={mockData} />
        <Button title="Clear data" onPress={clearData} />
        <Button title="Detail" onPress={navigateToDetail} />
        <Button
          title={loading ? "Loading..." : "Fetch data"}
          onPress={fetchData}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      {runningList.map((item) => (
        <Text key={item.id} style={styles.data}>
          {JSON.stringify(item)}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 100,
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  data: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
