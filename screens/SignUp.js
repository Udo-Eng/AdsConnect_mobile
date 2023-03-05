import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import React from "react";
import SignUpForm from "../components/SignUp/SignUpForm";

const SignUp = () => {
  return (
    <View>
      {/* Form Header Section  */}
      <Text style={styles.logo}>DRUID</Text>
      <Text style={styles.subtitle}>All You Need Is A Digital Push</Text>
      {/* <Image source={require("../assets/images/amico.png")} /> */}
      <Text style={styles.formHeader}>Sign Up</Text>
      <Text>DRUID</Text>
      <Text>All You Need Is A Digital Push</Text>
      <Image source={require("../assets/images/amico.png")} />
      <Text>Sign Up</Text>

      <SignUpForm />

      {/* Navigate to Sign In */}
      <View>
        <Text>
          Already have an account?
          <Pressable>
            <Text> Sign In</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F5F5F5",
  },
  logo:{
    fontWeight: 400,
    fontFamily: 'Yeseva One',
    fontSize : 36,
    color: "#032550",
    textAlign: "center",
    marginBottom: 48,
  },
  subtitle:{
    fontWeight: 400,
    fontSize : 16,
    color: "#1877F2",
    textAlign: "center",
    fontFamily: "Lora",
    marginBottom: 40,
  },
  formHeader:{
    fontFamily:"Montserrat",
    fontWeight: 400,
    fontSize: 24,
    color: "#074698",
    textAlign: "center"
  }
});
