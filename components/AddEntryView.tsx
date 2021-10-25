import React, { useCallback, useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import DateTimePicker, {
  Event as DatePickerEvent,
} from "@react-native-community/datetimepicker";

const AddEntryView = () => {
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

  return (
    <View style={styles.addEntryView}>
      <Pressable onPress={handleOnPress}>
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
      <Pressable>
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
  },
});

export default AddEntryView;
