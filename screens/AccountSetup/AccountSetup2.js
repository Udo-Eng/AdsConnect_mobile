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
// import { Dropdown } from "react-native-element-dropdown";

const AccountSetup2 = ({ navigation }) => {
  const [state, setState] = useState("Yes");
  const [school, setSchool] = useState("");
  const [schoolID, setSchoolID] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.title}>All you need is a digital push</Text>
          <Image source={require("../../assets/images/amico.png")} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>Complete Account Set Up</Text>

          <View>
            <Text style={styles.formLabel}>State</Text>
            <TextInput
              style={styles.formInput}
              value={state}
              onChangeText={setState}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>School</Text>
            <TextInput
              style={styles.formInput}
              value={school}
              onChangeText={setSchool}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>School ID</Text>
            <TextInput
              style={styles.formInput}
              value={schoolID}
              onChangeText={setSchoolID}
              keyboardType="alpha-numeric"
            />
          </View>
          <PrimaryButton
            style={styles.saveButton}
            onPress={() => navigation.navigate("Final Setup")}
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

export default AccountSetup2;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
