import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { CardView } from "../components/CardView";

export function GaragemScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner} />
        <View style={[styles.triangleCorner, styles.topRight]} />
        <View style={[styles.triangleCorner, styles.bottomLeft]} />
        <View style={[styles.triangleCorner, styles.bottomRight]} />
        <CardView />
      </View>
    </View>
  );
}
