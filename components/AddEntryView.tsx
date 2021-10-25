import React, { useCallback, useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import DateTimePicker, {
  Event as DatePickerEvent,
} from "@react-native-community/datetimepicker";
import { Entry } from "../App";

type AddEntryViewProps = {
  onSubmit: (entry: Entry) => void;
};

const AddEntryView = ({ onSubmit }: AddEntryViewProps) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleOnChange: (event: DatePickerEvent, date?: Date) => void = (
    event,
    selectedDate
  ) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleOnPress = useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, []);

  const handleOnSubmit = useCallback(() => {
    onSubmit({ date });
  }, [date]);

  return (
    <View style={styles.addEntryView}>
      <Pressable onPress={handleOnPress} style={styles.dateTimePicker}>
        <Text>{date.toDateString()}</Text>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={handleOnChange}
        />
      )}
      <Pressable style={styles.addEntryButton} onPress={handleOnSubmit}>
        <Text>Add Entry</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  addEntryView: {
    backgroundColor: "#f0f3fa",
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
  },
  addEntryButton: {
    alignItems: "center",
  },
  dateTimePicker: {
    alignItems: "center",
  },
});

export default AddEntryView;
