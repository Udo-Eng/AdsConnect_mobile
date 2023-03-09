import { StyleSheet, TextInput } from "react-native";
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import {COLORS,SIZES}  from "../../constants";

const NumberInput = forwardRef(({ value,onChangeText, isValid }, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }),
    []
  );

  let defaultStyles = [styles.numberInput, !isValid && styles.errorStyle];

  return (
    <TextInput
      ref={inputRef}
      value={value}
      onChangeText={onChangeText}
      style={defaultStyles}
      keyboardType="number-pad"
      maxLength={1}
      cursorColor="#000000"
    />
  );
});

export default NumberInput;

const styles = StyleSheet.create({
  numberInput: {
    width: SIZES.width < 450 ? 45 : 55,
    height: SIZES.width < 450 ? 55 : 84,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DFE2E8",
    borderRadius: 4,
    padding: 16,
    marginHorizontal: 4,
  },
  errorStyle: {
    color: COLORS.errorColor,
    borderColor: COLORS.errorColor ,
    backgroundColor: "bisque",
  },
});
