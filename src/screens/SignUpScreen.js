import React, { useState, useContext } from "react";
import { Button, Text, Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import Spacer from "./../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignUpScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      signUp({ email, password });
    }
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          required
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Input
          label="Password"
          value={password}
          required
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {state.errorMessage ? (
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
      </Spacer>
      <Spacer>
        <Button title="Sign Up" onPress={handleSubmit} />
      </Spacer>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginBottom: 150,
    flex: 1,
  },
  errorMessage: {
    fontSize: 16,
    color: "darkred",
  },
});
