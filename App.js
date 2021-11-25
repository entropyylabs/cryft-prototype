import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Modal } from "react-native";
import GlobalStyles from "./GlobalStyles";
import HomeCard from "./HomeCard";
import Navbar from "./Navbar";
import AppLoading from "expo-app-loading";
import { useFonts, Khand_400Regular } from "@expo-google-fonts/khand";
import ActionButton from "./ActionButton";

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
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
        <ActionButton />
        <Text
          style={{
            fontFamily: "Khand_400Regular",
            fontSize: 24,
            color: "#72C0BD",
            paddingTop: 10,
            paddingLeft: 36,
          }}
        >
          Explore loyalty programs
        </Text>
        <Navbar />
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
