import React from "react";
import { StyleSheet, View, Text } from "react-native";

const WalletID = () => {
  return (
    <View style={styles.holder}>
      <Text style={styles.heading}>Ishika Wallet ID</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  holder: {
    backgroundColor: "#ffffff",
    margin: "auto",
    marginTop: -175,
    height: 255,
    width: 270,
    padding: 15,
    borderRadius: 20,
  },
  heading: {
    color: "#226484",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default WalletID;
