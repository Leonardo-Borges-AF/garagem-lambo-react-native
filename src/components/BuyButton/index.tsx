import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

export function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign
          name="shopping-cart"
          size={24}
          color="#fff"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.buttonText}>Buy this</Text>
      </TouchableOpacity>
    </View>
  );
}
