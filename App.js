import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TermOfUse from "./screens/TermsOfUse";
import SignUp from "./screens/SignUp";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AccountSetup from "./screens/AccountSetup/AccountSetup";
import AccountSetup2 from "./screens/AccountSetup/AccountSetup2";
import FinalSetup from "./screens/AccountSetup/FinalSetup";


SplashScreen.preventAutoHideAsync();


export default function App() {

    const [fontsLoaded] = useFonts({
      'Lora': require('./assets/fonts/Lora-Regular.ttf'),
      "Yeseva One": require('./assets/fonts/YesevaOne-Regular.ttf'),
      "Montserrat": require('./assets/fonts/Montserrat-Regular.ttf')
    });
  
    // const onLayoutRootView  =  useCallback(async () => {
    //   if (fontsLoaded) {
    //     await SplashScreen.hideAsync();
    //   }
    // }, [fontsLoaded]);

    useEffect
  
    if (!fontsLoaded) {
      return null;
    }

  const Stack = createNativeStackNavigator();
  return (
    <>
      <PaperProvider>
      <NavigationContainer>
        {/* <View style={styles.container} onLayout={onLayoutRootView}>*/}
          <Stack.Navigator>
            <Stack.Screen name='Terms of Use' component={TermOfUse} />
            <Stack.Screen name='Sign Up' component={SignUp} />
            <Stack.Screen name='Account Setup' component={AccountSetup} />
            <Stack.Screen name='Complete Setup' component={AccountSetup2} />
            <Stack.Screen name='Final Setup' component={FinalSetup} />
          </Stack.Navigator>
        {/* </View> */}

      </NavigationContainer>
    </PaperProvider>
    </>
  
  );


}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
