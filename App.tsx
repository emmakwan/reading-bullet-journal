import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddEntryView from "./components/AddEntryView";
import EntryButton from "./components/EntryButton";

export default function App() {
  const [isAddEntryOpen, setIsAddEntryOpen] = useState(false);

  const handleEntryButtonPress = useCallback(() => {
    setIsAddEntryOpen((prevIsAddEntryOpen) => {
      return !prevIsAddEntryOpen;
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <EntryButton
        style={styles.entryButtonLayout}
        onPress={handleEntryButtonPress}
      />
      {isAddEntryOpen && <AddEntryView />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  entryButtonLayout: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
