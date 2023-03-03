import { View, Text, Image, Pressable,StyleSheet } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
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
    <View>
      
      <Input
        label="Email Address"
        textInputConfig={{
          autoCapitalize: "none",
          autoCorrect: false,
          autoFocus: true,
          cursorColor: "#00000",
        }}
      />
      <PasswordInput
        label="Password"
        textInputConfig={{
          onChangeText: () => {},
        }}
      />
      <View>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>
          I Agree To The <Text>Privacy Statement</Text>
        </Text>
      </View>

      <PrimaryButton>Create Account</PrimaryButton>



      <PrimaryButton>
        <Image source={require("../../assets/image/logos_google-icon.png")} />
        Sign Up With Google
      </PrimaryButton>
      
    </View>
  );
};

export default SignUpForm;


const styles = StyleSheet.create({
    container: {

    }
})
