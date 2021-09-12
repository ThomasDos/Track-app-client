import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "./../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignUpScreen = () => {
  const { state, signUp, clearErrorMessage } = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    if (email && password) {
      signUp({ email, password });
    }
  };

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={handleSubmit}
      />
      <NavLink
        textLink="  Already have an account ? Sign in instead !"
        routeName="SignIn"
      />
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
  link: {
    color: "blue",
    fontSize: 16,
    marginLeft: 5,
  },
});
