import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, routeName, textLink }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{textLink}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 16,
    marginLeft: 5,
  },
});
