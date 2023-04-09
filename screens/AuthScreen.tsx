import { MainLayout } from "@layouts/MainLayout";
import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { selectAuthenticationSlice } from "redux/authentication/slice";
import { loginThunk } from "redux/authentication/thunk";
import { useAppDispatch, useAppSelector } from "redux/store";

export const AuthScreen: IComponent = () => {
  const navigation = useNavigation();
  const { isAuthenticated } = useAppSelector(selectAuthenticationSlice);
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Dispatch the loginThunk with the email and password as arguments
    dispatch(loginThunk({ username, password }));
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log(
      "Signup pressed with userName:",
      username,
      " and password:",
      password
    );
  };

  useEffect(() => {
    // If the user is already logged in, navigate to the HomeScreen
    if (isAuthenticated) {
      navigation.navigate("Home" as never);
    }
  }, [isAuthenticated]);

  return (
    <MainLayout>
      <Text style={styles.heading}>
        {mode === "login" ? "Login" : "Sign up"}
      </Text>
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={mode === "login" ? "Login" : "Sign up"}
            onPress={mode === "login" ? handleLogin : handleSignup}
          />
          <Text style={styles.switchText}>
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </Text>
          <Button
            title={mode === "login" ? "Sign up" : "Login"}
            onPress={() => setMode(mode === "login" ? "signup" : "login")}
          />
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 80,
    fontSize: 32,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  main: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: "center",
    fontSize: 32,
  },
  switchText: {
    marginVertical: 10,
  },
});
