import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import SignUp from "./screens/SignUp";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();


export default function App() {

    const [fontsLoaded] = useFonts({
      'Lora': require('./assets/fonts/Lora-Regular.ttf'),
      "Yeseva One": require('./assets/fonts/YesevaOne-Regular.ttf'),
      "Montserrat": require('./assets/fonts/Montserrat-Regular.ttf')
    });
  
    const onLayoutRootView  =  useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }


  return (
    <>
      <StatusBar style ="dark" />
      <PaperProvider>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <SignUp />
        </View>
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
