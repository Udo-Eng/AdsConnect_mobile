import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import TermOfUse from "./screens/TermsOfUse";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <TermOfUse />
        {/* <SignUp /> */}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
