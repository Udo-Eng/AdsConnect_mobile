import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import PasswordInput from "../UI/PasswordInput";
import Input from "../UI/Input";
import { Checkbox } from "react-native-paper";
// import { emailIsValid,passwordIsValid } from "../../util/validators";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  const [checked, setChecked] = React.useState(false);

  function setInputsValueHandler(value, identifier) {
    setInputs((currInputs) => {
      return { ...currInputs, [identifier]: { value: value, isValid: true } };
    });
  }

  return (
    <>
       <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View keyboardDismissMode="on-drag">
      <Input
        label="Email Address"
        textInputConfig={{
          autoCapitalize: "none",
          autoCorrect: false,
          // autoFocus: true,
          cursorColor: "#00000",
        }}
      />
      <PasswordInput
        label="Password"
        textInputConfig={{
          onChangeText: () => {},
        }}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>
          I Agree To The <Pressable><Text style={styles.privacy}>Privacy Statement</Text></Pressable>
        </Text>
      </View>
      <PrimaryButton>Create Account</PrimaryButton>
      <PrimaryButton>
        <Image source={require("../../assets/images/logos_google-icon.png")} />
        Sign Up With Google
      </PrimaryButton>
    </View>
    </KeyboardAvoidingView>
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  checkboxContainer:{
      flexDirection:"row",
      alignItems: "center",
      justifyContent:"flex-start"
  },
  privacy:{
    verticalAlign: "middle",
    color: "red"
  }
});
