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
  onPress: () => void;
};

const EntryButton = ({ style, onPress }: EntryButtonProps) => {
  return (
    <Pressable style={style} onPress={onPress}>
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
    backgroundColor: "#592ebc",
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
  },
  addEntryButtonLabel: {
    color: "#fefefe",
    fontSize: 30,
  },
});

export default EntryButton;
