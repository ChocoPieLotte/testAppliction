import { Alert, StyleSheet, View } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import Button from "../components/Button";
import { MainTextInput } from "../components/MainTextInput";
import { PhotoPicker } from "../components/PhotoPicker";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

import { RootState } from "../store";
import { addItem } from "../store/itemsSlice";
import { MAX_SUM_VALUE } from "../constants";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')

  const total = useSelector((state: RootState) => state.inventory.totalSum)
  const dispatch = useDispatch()

  const onClose = () => navigation.goBack();

  const onAddItem = () => {
    const val = Number(value);
    if ((total + val) > MAX_SUM_VALUE) {
      Alert.alert('Error', 'Total sum more than ' + MAX_SUM_VALUE)
      return;
    }
    dispatch(addItem({
      value: val,
      name,
      description,
      photo,
    }))
    onClose();
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={onClose} testID="CancelButton" />
        <Button title="Add" disabled={!name || Number(value) < 1 || !photo} onPress={onAddItem} testID="AddButton" />
      </View>
      <PhotoPicker onImage={setPhoto} photoUri={photo} />
      <MainTextInput
        title="Name"
        placeholder="Bracelet"
        onChangeText={setName}
        value={name}
      />
      <MainTextInput
        title="Value"
        placeholder="700"
        keyboardType="numeric"
        rightSymbol="€"
        onChangeText={setValue}
        value={value}
      />
      <MainTextInput
        title="Description"
        placeholder="Optional"
        large
        onChangeText={setDescription}
        value={description}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
});
