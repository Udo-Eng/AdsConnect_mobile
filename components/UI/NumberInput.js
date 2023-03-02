import { StyleSheet, TextInput } from "react-native";
import React,{useRef,useImperativeHandle,forwardRef} from "react";

const NumberInput = forwardRef(({ onChangeText},ref) => {

    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }),[]);

  return (
    <TextInput
      ref={inputRef}
      onChangeText={onChangeText}
      style={styles.numberInput}
      keyboardType="number-pad"
      maxLength={1}
      cursorColor="#000000"
    />
  );
});

export default NumberInput;

const styles = StyleSheet.create({
  numberInput: {
    width: 48,
    height: 48,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    padding: 16,
  },
});
