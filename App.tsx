import { StatusBar } from "expo-status-bar";
import React, { PropsWithChildren, useCallback, useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import AddEntryView from "./components/AddEntryView";
import EntryButton from "./components/EntryButton";

export type Entry = {
  date: Date;
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Card = ({ children }: PropsWithChildren<{}>) => {
  return <View style={styles.card}>{children}</View>;
};

export default function App() {
  const [isAddEntryOpen, setIsAddEntryOpen] = useState(false);

  const handleEntryButtonPress = useCallback(() => {
    setIsAddEntryOpen((prevIsAddEntryOpen) => {
      return !prevIsAddEntryOpen;
    });
  }, []);

  const [entries, setEntries] = useState<Entry[]>([]);

  const handleOnSubmit = useCallback((entry: Entry) => {
    setEntries((prevEntries) => {
      return prevEntries.concat(entry);
    });
    setIsAddEntryOpen(false);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {entries.map((entry, index) => {
          return (
            <Card key={`entryCard-${index}`}>
              <Text>{entry.date.toDateString()}</Text>
            </Card>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
      {isAddEntryOpen && <AddEntryView onSubmit={handleOnSubmit} />}
      <EntryButton
        style={styles.entryButtonLayout}
        color={isAddEntryOpen ? "red" : "#592ebc"}
        label={isAddEntryOpen ? "x" : "+"}
        onPress={handleEntryButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3fa",
    alignItems: "center",
    justifyContent: "center",
  },
  entryButtonLayout: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  card: {
    backgroundColor: "#fefefe",
    height: 100,
    width: windowWidth - 30,
    margin: 7,
    borderRadius: 10,
    shadowColor: "#d1d2d4",
    elevation: 5,
  },
});
