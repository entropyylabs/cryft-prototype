import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import GlobalStyles from "./GlobalStyles";
import HomeCard from "./HomeCard";
import AppLoading from "expo-app-loading";
import { useFonts, Khand_400Regular } from "@expo-google-fonts/khand";

export default function App() {
  let [fontsLoaded] = useFonts({
    Khand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Text
          style={{
            fontFamily: "Khand_400Regular",
            fontSize: 24,
            color: "#72C0BD",
            paddingTop: 10,
            paddingLeft: 36,
          }}
        >
          Hi Ishika
        </Text>
        <HomeCard />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
