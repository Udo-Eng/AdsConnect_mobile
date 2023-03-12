import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TermOfUse from "./screens/TermsOfUse";
import SignUp from "./screens/SignUp";
import AccountSetup from "./screens/AccountSetup/AccountSetup";
import AccountSetup2 from "./screens/AccountSetup/AccountSetup2";
import FinalSetup from "./screens/AccountSetup/FinalSetup";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <View style={styles.container}> */}
        <Stack.Navigator>
          <Stack.Screen name="Terms of Use" component={TermOfUse} />
          {/* <Stack.Screen name='Sign Up' component={SignUp} /> */}
          <Stack.Screen name="Account Setup" component={AccountSetup} />
          <Stack.Screen name="Complete Setup" component={AccountSetup2} />
          <Stack.Screen name="Final Setup" component={FinalSetup} />
        </Stack.Navigator>
        {/* </View> */}
      </NavigationContainer>
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
