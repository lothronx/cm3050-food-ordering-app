// start of my code
/**
 * @fileoverview HomescreenCell component that renders an individual restaurant card
 * in the main restaurant list. Each cell displays a restaurant's image, title,
 * tagline, and estimated delivery time in an interactive card format.
 */

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Cell } from "react-native-tableview-simple";

/**
 * HomescreenCell component renders a touchable restaurant card with image and details.
 * When tapped, it navigates to the restaurant's menu screen.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Name of the restaurant
 * @param {string} props.tagline - Short description or type of cuisine
 * @param {string} props.eta - Estimated delivery time in minutes
 * @param {Object} props.imgUri - Image source for the restaurant
 * @param {Object} props.navigation - Navigation object for screen transitions
 * @returns {React.ReactElement} A touchable cell displaying restaurant information
 */
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
            {/* Restaurant cover image */}
            <Image source={imgUri} resizeMode="cover" style={styles.image} />
            
            {/* Delivery time badge */}
            <View style={styles.etaContainer}>
              <Text style={styles.eta}>
                {eta}
                {"\n"}mins
              </Text>
            </View>
            
            {/* Restaurant information overlay */}
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

/**
 * Styles for the HomescreenCell component.
 * The layout uses absolute positioning for overlays and maintains
 * consistent spacing and visual hierarchy.
 */
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
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay for text readability
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
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
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
// end of my code