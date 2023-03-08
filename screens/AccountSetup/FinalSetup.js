import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity
} from "react-native";
import PrimaryButton from "../../components/UI/PrimaryButton";
// import { Dropdown } from "react-native-element-dropdown";

const FinalSetup = ({ navigation }) => {
    const [radioBtnData, setRadiioBtnData] = useState(['Student', 'Staff']);
    const [checked, setChecked] = useState(0);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>Looking Good</Text>

          <View>
            <Text style={styles.formLabel}>First Name</Text>
            <TextInput
              style={styles.formInput}
            >Bella</TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Last Name</Text>
            <TextInput
              style={styles.formInput}
            >Emma</TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>Phone Number</Text>
            <TextInput
              style={styles.formInput}
            >0810-999-5559</TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>State</Text>
            <TextInput
              style={styles.formInput}
            >Delta</TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>School</Text>
            <TextInput
              style={styles.formInput}
            >Federal University Of Petroleum Resources</TextInput>
          </View>
          <View>
            <Text style={styles.formLabel}>School ID</Text>
            <TextInput
              style={styles.formInput}
            >COT/111/2022</TextInput>
          </View>
          <View>
              {
                  radioBtnData.map((data, key) => {
                      return (
                          <View key={key}>
                              {checked === key ?
                                <TouchableOpacity style={styles.btn} source={require("../../assets/adaptive-icon.png")}>
                                    <Image style={styles.img} />
                                    <Text>{data}</Text>
                                </TouchableOpacity>  :
                                <TouchableOpacity onPress={() => setChecked({key})} style={styles.btn} source={require("../../assets/adaptive-icon.png")}>
                                    <Image style={styles.img} />
                                    <Text>{data}</Text>
                                </TouchableOpacity>
                            }
                          </View>
                      )
                  })
              }
          </View>
          <PrimaryButton
            style={styles.saveButton}
            onPress={() => navigation.navigate("Terms of Use")}
          >
            <Text style={{ color: "#fff" }}>Save And Continue</Text>
          </PrimaryButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FinalSetup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
    color: '#1877f2',
    borderWidth: 0.2,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: '#dceafc'
  },
  saveButton: {
    width: 380,
  },
  skipButton: {
    alignItems: "center",
  },
  btn: {

  },
  img: {
      height: 20,
      width: 20
  }
});
