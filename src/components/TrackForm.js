import React, { useContext, useState } from "react";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const [saveTrack] = useSaveTrack();

  const {
    state: { name, recording, locations },
    changeName,
    startRecording,
    stopRecording,
  } = useContext(LocationContext);
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={name}
          onChangeText={changeName}
          required
        />
        {!name && <Text>Please fill a name for your track !</Text>}
      </Spacer>
      <Button
        title={`${recording ? "Stop" : "Start"} Recording`}
        onPress={recording ? stopRecording : startRecording}
      />
      <Spacer></Spacer>
      {!recording && locations.length ? (
        <Button
          title="Save Track"
          onPress={() => (name ? saveTrack() : null)}
        />
      ) : null}
    </>
  );
};

export default TrackForm;
