import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import Landing from "./src/pages/Landing";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_700Bold,
    Archivo_400Regular,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="light" />
      </>
    );
  }
}
