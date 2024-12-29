import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Cell } from "react-native-tableview-simple";

export function HomescreenCell({ title, tagline, eta, imgUri, navigation }) {
  return (
    <Cell
      contentContainerStyle={{ height: 200, marginVertical: 10 }}
      backgroundColor="transparent"
      cellContentView={
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.touchable}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Menu", { restaurantName: title })}>
            <Image source={imgUri} resizeMode="cover" style={styles.image} />
            <View style={styles.etaContainer}>
              <Text style={styles.eta}>
                {eta}
                {"\n"}mins
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.tagline}>{tagline}</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  tagline: {
    color: "white",
    fontSize: 14,
  },
  etaContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  eta: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});
