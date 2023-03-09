import { View, StyleSheet, Image, Text } from "react-native";
import NumberInput from "../UI/NumberInput";
import React, { useState, useRef, useEffect } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import useOnChange from "../../hooks/useOnChange";
import { useNavigation } from "@react-navigation/native";
import { isNotEmpty } from "../../util/validators";
import { COLORS,SIZES } from "../../constants";

const VerifyEmailForm = () => {
  const navigation = useNavigation();

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [num6, setNum6] = useState("");
  const [isInputsFilled, setIsInputsFilled] = useState(false);
  const [codeIsValid, setcodeIsValid] = useState(false);

  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);

  // Register All the effects for this form component
  useOnChange(num1, input2);
  useOnChange(num2, input3);
  useOnChange(num3, input4);
  useOnChange(num4, input5);
  useOnChange(num5, input6);

  let isFilled =
    isNotEmpty(num1) &&
    isNotEmpty(num2) &&
    isNotEmpty(num3) &&
    isNotEmpty(num4) &&
    isNotEmpty(num5) &&
    isNotEmpty(num6);

  useEffect(() => {
    if (isFilled) {
      setIsInputsFilled(true);
    }
  }, [isFilled]);

  function onSubmitHandler() {
    let verifyNumber = `${num1}${num2}${num3}${num4}${num5}${num6}`;

    // TODOS

    // Send a post request to backend

    // if the responds is sucessful

    // route the user to Login screen

    // else remain on screen and display verfication number  is invalid
  }

  return (
    <>
      <View style={styles.form}>
        <NumberInput onChangeText={setNum1} isValid={codeIsValid} value={num1}/>
        <NumberInput
          ref={input2}
          onChangeText={setNum2}
          isValid={codeIsValid}
          value={num2}
        />
        <NumberInput
          ref={input3}
          onChangeText={setNum3}
          isValid={codeIsValid}
          value={num3}
        />
        <NumberInput
          ref={input4}
          onChangeText={setNum4}
          isValid={codeIsValid}
          value={num4}
        />
        <NumberInput
          ref={input5}
          onChangeText={setNum5}
          isValid={codeIsValid}
          value={num5}
        />
        <NumberInput
          ref={input6}
          onChangeText={setNum6}
          isValid={codeIsValid}
          value={num6}
        />
      </View>

      {codeIsValid && (
        <Text style={styles.resendEmail}>Didn’t receive mail?</Text>
      )}
      {isInputsFilled && codeIsValid && (
        <PrimaryButton btnContainer={{marginVertical : 12}} onPress={onSubmitHandler}>Next</PrimaryButton>
      )}

      {!codeIsValid && (
        <View style={styles.errorContainer}>
          <Image
            style={styles.errorIcon}
            source={require("../../assets/images/errorImage.png")}
          />
          <Text style={styles.errorText}>
            The SMS passcode you’ve entered is incorrect
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    padding: 31,
    paddingLeft: 20,
    width: "100%",
    justifyItems: "center",
    alignItems: "center",
  },
  resendEmail: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    color: "#000000",
    marginLeft: 20,
    textAlign: "left",
  },
  errorIcon: {
    width: 66,
    height: 66,
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: COLORS.errorColor,
    fontFamily: "Lora",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: SIZES.width < 450 ? 14 : 16,
    lineHeight: 20,
  },
});

export default VerifyEmailForm;
