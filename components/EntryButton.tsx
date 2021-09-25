import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";

type EntryButtonProps = {
  style: StyleProp<ViewStyle>;
};

const EntryButton = ({ style }: EntryButtonProps) => {
  return (
    <Pressable style={style} onPress={() => {}}>
      <View style={styles.addEntryButton}>
        <Text style={styles.addEntryButtonLabel}>+</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addEntryButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  addEntryButtonLabel: {
    color: "white",
    fontSize: 30,
  },
});

export default EntryButton;
