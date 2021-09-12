import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={40}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      {locations ? (
        <Polyline coordinates={locations.map((elem) => elem.coords)} />
      ) : null}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 150,
  },
});