import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "./../components/AuthForm";
import NavLink from "./../components/NavLink";

const SignInScreen = () => {
  const { state, signIn } = useContext(AuthContext);
  const handleSubmit = ({ email, password }) => {
    if (email && password) {
      signIn({ email, password });
    }
  };
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={handleSubmit}
      />
      <NavLink
        textLink="Don't have an account ? Sign up instead !"
        routeName="SignUp"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginBottom: 150,
    flex: 1,
  },
});
