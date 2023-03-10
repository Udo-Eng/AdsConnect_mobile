import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import React from "react";
import SignUpForm from "../components/SignUp/SignUpForm";


const SignUp = ({navigation}) => {

  return (
    <View style={styles.container}>
      {/* Form Header Section  */}
      <Text style={styles.logo}>DRUID</Text>
      <Text style={styles.subtitle}>All You Need Is A Digital Push</Text>
      {/* <Image source={require("../assets/images/amico.png")} /> */}
      <Text style={styles.formHeader}>Sign Up</Text>

      <SignUpForm />

      {/* Navigate to Sign In */}
      <View style={styles.signInNavigate}>
        <Text style={styles.fontFamily}>Already have an account?</Text>
        <Pressable onPress={()=>navigation.navigate('Account Setup')}>
          <Text style={styles.signInLink}> Sign In</Text>
        </Pressable>
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
  logo: {
    fontWeight: 400,
    fontFamily: "Yeseva One",
    fontSize: 36,
    color: "#032550",
    textAlign: "center",
    marginBottom: 48,
  },
  subtitle: {
    fontWeight: 400,
    fontSize: 16,
    color: "#1877F2",
    textAlign: "center",
    fontFamily: "Lora",
    marginBottom: 40,
  },
  formHeader: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 24,
    color: "#074698",
    textAlign: "center",
  },
  signInNavigate: {
    
    flexDirection: "row",
    marginVertical: 16,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  signInLink: {
    fontFamily: "Montserrat",
    marginHorizontal: 6,
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 14,
    color: "#1877F2",
  },
  fontFamily:{
    fontFamily: "Montserrat",
  }
});
