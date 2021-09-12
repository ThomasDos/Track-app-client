import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { Text, Button } from "react-native-elements";
import Spacer from "./../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text h3>My Account</Text>
      <Spacer>
        <View style={styles.buttonSignOut}>
          <Button
            title="Sign out!"
            onPress={signOut}
            titleStyle={{ fontSize: 24 }}
          />
        </View>
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} color="black" />,
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  buttonSignOut: {
    marginTop: 50,
    alignSelf: "center",
  },
});
