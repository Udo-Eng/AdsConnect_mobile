import { View, Text, StyleSheet } from "react-native";
import React from "react";
import VerifyEmailForm from "../components/VerifyEmail/VerifyEmailForm";

const VerifyEmail = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>We sent you a code </Text>
      <Text style={styles.subtitle}>Enter it to verify</Text>
      <Text style={[styles.subtitle,styles.email]}>bella.emma@gmail.com</Text>
    <VerifyEmailForm />
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
    sceen:{
    flex: 1,
    padding: 6,
    },
  title: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 29,
    color: "#032550",
    marginTop: 80,
    textAlign: "center"
  },
  subtitle:{
    fontFamily: "Lora",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: "#032550",
    marginTop: 31,
    textAlign: "center"
  },
  email:{
    color: "#166ddf",
    marginTop: 0,
  }
});
