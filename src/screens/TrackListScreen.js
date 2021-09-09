import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Track list</Text>

      <Button
        title={"Go to Track Detail"}
        onPress={() => navigation.navigate("TrackDetail")}
      />

      <Button
        title={"Go to Login Flow"}
        onPress={() => navigation.navigate("loginFlow")}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
