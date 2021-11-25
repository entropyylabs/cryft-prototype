import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_300Light,
} from "@expo-google-fonts/nunito";

const ActionButton = () => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_300Light,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.buttonHolder}>
        <View style={styles.buttonGroup}>
          <Feather name='arrow-up-right' size={24} color='white' />
          <Text style={styles.buttonText}>Send</Text>
        </View>
        <View style={styles.buttonGroup}>
          <Feather name='arrow-down-left' size={24} color='white' />
          <Text style={styles.buttonText}>Receive</Text>
        </View>
        <View style={styles.buttonGroup}>
          <AntDesign name='staro' size={24} color='white' />
          <Text style={styles.buttonText}>History</Text>
        </View>
        <View style={styles.buttonGroup}>
          <FontAwesome5 name='exchange-alt' size={24} color='white' />
          <Text style={styles.buttonText}>Exchange</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  buttonHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginLeft: 36,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Nunito_300Light",
  },
});

export default ActionButton;
