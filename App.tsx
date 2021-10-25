import { StatusBar } from "expo-status-bar";
import React, { PropsWithChildren, useCallback, useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import AddEntryView from "./components/AddEntryView";
import EntryButton from "./components/EntryButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [isAddEntryOpen, setIsAddEntryOpen] = useState(false);

  const handleEntryButtonPress = useCallback(() => {
    setIsAddEntryOpen((prevIsAddEntryOpen) => {
      return !prevIsAddEntryOpen;
    });
  }, []);

  const [entries, setEntries] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const Card = ({ children }: PropsWithChildren<{}>) => {
    return <View style={styles.card}>{children}</View>;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {entries.map((element, index) => {
          return (
            <Card key={`entryCard-${index}`}>
              <Text>{index}</Text>
            </Card>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
      {isAddEntryOpen && <AddEntryView />}
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
