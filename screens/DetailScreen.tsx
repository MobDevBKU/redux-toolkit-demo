import { StyleSheet, Text, View } from "react-native";
import { selectRunningListSlice } from "redux/features/runningList/slice";
import { useAppSelector } from "redux/store";

export const DetailScreen: IComponent = () => {
  const { runningList } = useAppSelector(selectRunningListSlice);

  return (
    <View style={styles.wrapper}>
      {runningList.length === 0 && (
        <Text style={styles.data}>No data to show</Text>
      )}
      {runningList.map((item) => (
        <View key={item.id} style={styles.dataItem}>
          <Text style={styles.data}>ID: {item.id}</Text>
          <Text style={styles.data}>Name: {item.name}</Text>
          <Text style={styles.data}>Loc: {item.location}</Text>
          <Text style={styles.data}>Distance: {item.distance}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  dataItem: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
  },
  data: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
