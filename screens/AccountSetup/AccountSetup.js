import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";

const AccountSetup = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.title}>Get to know your audience with us</Text>
          <Image source={require("../../assets/images/amico.png")} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>Complete Account Set Up</Text>
          <View>
            <Text style={styles.formLabel}>First Name</Text>
            <TextInput
              style={styles.formInput}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Last Name</Text>
            <TextInput
              style={styles.formInput}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Phone Number</Text>
            <TextInput
              style={styles.formInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType={"number-pad"}
            />
          </View>
          <PrimaryButton
            style={styles.saveButton}
            onPress={() => navigation.navigate("Complete Setup",{
              firstName,
              lastName,
              
            })}
          >
            <Text style={{ color: "#fff" }}>Save And Continue</Text>
          </PrimaryButton>
          <Pressable style={styles.skipButton}>
            <Text style={{ color: "#1877f2" }}>Skip</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AccountSetup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  pageHeader: {
    alignItems: "center",
    gap: 12,
    marginBottom: 36,
  },
  title: {
    color: "#074698",
    fontSize: 16,
    textTransform: "capitalize",
  },
  formContainer: {
    paddingLeft: 24,
    paddingRight: 24,
    gap: 20,
  },
  formHeading: {
    color: "#032550",
    fontSize: 24,
    textAlign: "center",
  },
  formLabel: {
    color: "#545950",
    fontSize: 14,
  },
  formInput: {
    width: 380,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  saveButton: {
    width: 380,
  },
  skipButton: {
    alignItems: "center",
  },
});
