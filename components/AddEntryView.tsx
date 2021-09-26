import React from "react";
import { StyleSheet, View } from "react-native";

const AddEntryView = () => {
  return <View style={styles.addEntryView}></View>;
};

const styles = StyleSheet.create({
  addEntryView: {
    backgroundColor: "red",
    height: 600,
    width: 300,
  },
});

export default AddEntryView;
