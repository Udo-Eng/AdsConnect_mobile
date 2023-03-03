import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import SignUpForm from "../components/SignUp/SignUpForm";

const SignUp = () => {
  return (
    <View>
      {/* Form Header Section  */}
      <Text>DRUID</Text>
      <Text>All You Need Is A Digital Push</Text>
      <Image source={require("../../assets/images/amico.png")} />
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
    backgroundColor: "#fff",
  },
});
