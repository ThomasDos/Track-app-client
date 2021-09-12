import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");

  const { state } = useContext(TrackContext);

  const track = state.find((tra) => tra._id === _id);

  const initialCoords = track.locations[0].coords;
  return (
    <>
      <Text h3>{track.name}</Text>
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({});
