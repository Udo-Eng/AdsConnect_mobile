import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TermOfUse from "./screens/TermsOfUse";
import SignUp from "./screens/SignUp";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AccountSetup from "./screens/AccountSetup/AccountSetup";
import AccountSetup2 from "./screens/AccountSetup/AccountSetup2";
import FinalSetup from "./screens/AccountSetup/FinalSetup";
import FrontPhoto from "./screens/AccountSetup/FrontPhoto";
import VerifyEmail from "./screens/VerifyEmail";
import BackPhoto from "./screens/AccountSetup/BackPhoto";
import FinalPage from "./screens/AccountSetup/FinalPage";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Lora: require("./assets/fonts/Lora-Regular.ttf"),
    "Yeseva One": require("./assets/fonts/YesevaOne-Regular.ttf"),
    "Montserrat": require("./assets/fonts/Montserrat-Regular.ttf"),
  });



  useEffect(() => {
    
    async function displaySignUp() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    displaySignUp();

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  return (
    <>
    <StatusBar style="dark" />
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Sign Up" options={{headerShown: false}} component={SignUp} />
            <Stack.Screen name="Terms of Use" options={{headerShown: false}}  component={TermOfUse} />
             <Stack.Screen name="Account Setup" component={AccountSetup} />
            <Stack.Screen name="Complete Setup" component={AccountSetup2} />
          <Stack.Screen name="Front Image" component={FrontPhoto} />
          <Stack.Screen name="Back Image" component={BackPhoto} />
          <Stack.Screen name="Final Setup" component={FinalSetup} />
          <Stack.Screen name="Final Page" component={FinalPage} />
          {/* <Stack.Screen name="VerifyEmail" options={{headerShown: false}} component={VerifyEmail} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
// });
