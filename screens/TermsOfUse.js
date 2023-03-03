import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";

// const Seperator = () => <View style={styles.seperator} />

const TermOfUse = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Terms of Use</Text>
        <Text style={styles.lastUpdate}>Last update on 2/6/2023</Text>
      <View style={styles.seperator}/>
      </View>
      <ScrollView style={styles.scrollContainer} indicatorStyle="blue">
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>1. Clause 1</Text>
          <Text style={styles.textBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem.
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>2. Clause 2</Text>
          <Text style={styles.textBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Viverra condimentum
            eget purus in. Consectetur eget id morbi amet amet, in. Ipsum
            viverra pretium tellus neque. Ullamcorper suspendisse aenean leo
            pharetra in sit semper et. Amet quam placerat sem.
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>3. Clause 3</Text>
          <Text style={styles.textBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Consectetur eget id morbi amet amet, in.
            Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean
            leo pharetra in sit semper et. Amet quam placerat sem. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Viverra condimentum
            eget purus in. Consectetur eget id morbi amet amet, in. Ipsum
            viverra pretium tellus neque. Ullamcorper suspendisse aenean leo
            pharetra in sit semper et. Amet quam placerat sem.
          </Text>
        </View>

        <PrimaryButton style={styles.buttonContainer}>
          <Text style={{color: '#fff'}}>Agree And Continue</Text>
        </PrimaryButton>
      </ScrollView>
    </View>
  );
};

export default TermOfUse;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
  titleContainer: {
    paddingLeft: 26.5,
    marginTop: 28,
    marginBottom: 28
  },
  pageTitle: {
    color: "#074698",
    fontSize: 36,
    paddingBottom: 10,
  },
  lastUpdate: {
    color: "#032550",
    fontSize: 16,
  },
  scrollContainer: {
    paddingLeft: 43,
    paddingRight: 21,
    paddingTop: 30,
  },
  textContainer: {
    marginBottom: 30,
  },
  textTitle: {
    fontSize: 24,
    color: "#032550",
    marginBottom: 9,
    marginLeft: 8,
  },
  textBody: {
    fontSize: 14,
    color: "#545950",
  },
  buttonContainer: {
      marginBottom: 40
  },
  seperator: {
      borderBottomWidth: 1,
      borderColor: '#d9d9d9',
      marginTop: 32
  }
});
