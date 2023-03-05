import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { termsOfUse } from "../data/termsOfUse";

// const Seperator = () => <View style={styles.seperator} />

const TermOfUse = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Terms of Use</Text>
        <Text style={styles.lastUpdate}>Last update on 2/6/2023</Text>
        <View style={styles.seperator} />
      </View>
      <ScrollView style={styles.scrollContainer} indicatorStyle={"redh"}>
        {termsOfUse.map(({ id, text }) => {
          return (
            <View style={styles.textContainer} keyExtractor={() => id}>
              <Text style={styles.textTitle}>
                {id}. Clause {id}
              </Text>
              <Text style={styles.textBody}>{text}</Text>
            </View>
          );
        })}

        <PrimaryButton style={styles.buttonContainer} onPress={() => navigation.navigate('Account Setup')}>
          <Text style={{ color: "#fff" }}>Agree And Continue</Text>
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
    marginBottom: 28,
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
    marginBottom: 40,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: "#d9d9d9",
    marginTop: 32,
  },
});
