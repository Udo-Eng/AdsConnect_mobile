import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import PasswordInput from "../UI/PasswordInput";
import Input from "../UI/Input";
import { Checkbox } from "react-native-paper";
// import { emailIsValid,passwordIsValid } from "../../util/validators";
import GoogleSignUpButton from "../UI/GoogleSignUpButton";
import { useIsFocused, useRoute,useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";

const SignUpForm = () => {
  const isFocused = useIsFocused();
  const route = useRoute();
  const navigation = useNavigation();




  const [inputs, setInputs] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  const [checked, setChecked] = React.useState(false);


  
  useEffect(() => {
    if (isFocused && route.params) {
      setChecked(route.params.checked);
    }
  }, [isFocused, route]);



  // function to handle stateupdate and modification 
  function setInputsValueHandler(identifier,value) {
    setInputs((currInputs) => {
      return { ...currInputs, [identifier]: { value: value, isValid: true } };
    });
  }


  // function to navigate to the privacy Statement page 
  function viewPrivacyStatementHandler(){
    navigation.navigate("Terms of Use");
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
              value: inputs.email.value,
              autoCapitalize: "none",
              autoCorrect: false,
              // autoFocus: true,
              cursorColor: COLORS.cursorColor,
              onChangeText: setInputsValueHandler.bind(this, "email"),
            }}
          />
          <PasswordInput
            label="Password"
            textInputConfig={{
              value: inputs.password.value,
              onChangeText: setInputsValueHandler.bind(this, "password"),
            }}
          />
          <View style={styles.checkboxContainer}>
            <Checkbox
              color="#1877F2"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.fontFamily}>I Agree To The</Text>
            <Pressable onPress={viewPrivacyStatementHandler}>
              <Text style={styles.privacy}>Privacy Statement</Text>
            </Pressable>
          </View>
          <PrimaryButton>Create Account</PrimaryButton>
          <GoogleSignUpButton
            btnStyle={styles.btnStyle}
            btnText="Sign Up With Google"
            textStyle={styles.btnText}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/images/google_icon.png")}
            />
          </GoogleSignUpButton>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 12,
  },
  privacy: {
    fontFamily: "Montserrat",
    verticalAlign: "middle",
    color: "red",
    marginHorizontal: 6,
  },
  fontFamily: {
    fontFamily: "Montserrat",
  },
  btnText: {
    margin: 12,
    color: "#1877F2",
    fontWeight: "normal",
  },
  btnStyle: {
    marginVertical: 12,
    backgroundColor: "#DCEAFC",
  },
  icon: {
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
  },
});
