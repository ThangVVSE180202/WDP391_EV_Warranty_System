import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Screen</Text>
      <Text style={styles.subtitle}>Placeholder for navigation stack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 18, marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#666" },
});

export default StackScreen;
