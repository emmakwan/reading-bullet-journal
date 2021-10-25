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
  color: string;
  label: string;
  onPress: () => void;
};

const EntryButton = ({ style, color, label, onPress }: EntryButtonProps) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <View style={[styles.addEntryButton, { backgroundColor: color }]}>
        <Text style={styles.addEntryButtonLabel}>{label}</Text>
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
    zIndex: 10,
  },
  addEntryButtonLabel: {
    color: "#fefefe",
    fontSize: 30,
  },
});

export default EntryButton;
