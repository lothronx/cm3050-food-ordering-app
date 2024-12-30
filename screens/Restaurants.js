// start of my code
/**
 * @fileoverview Restaurants screen component that displays the list of available restaurants.
 * This is the main screen of the app where users can browse and select restaurants
 * to view their menus.
 */

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Section, TableView } from "react-native-tableview-simple";
import { RESTAURANTS } from "../restaurantsData";
import { HomescreenCell } from "../components/HomescreenCell";

/**
 * Restaurants screen component that renders a scrollable list of available restaurants.
 * Each restaurant is displayed as a cell that users can tap to view its menu.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object for screen management
 * @returns {React.ReactElement} Restaurants screen UI with interactive restaurant cells
 */
export function Restaurants({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TableView>
          {/* Restaurant list section with custom separator styling */}
          <Section header="" hideSeparator separatorTintColor="#ccc">
            {RESTAURANTS.map((items, index) => {
              // Exclude menu data from cell props as it's not needed for restaurant list display
              const { menu, ...cellProps } = items;
              return <HomescreenCell key={index} navigation={navigation} {...cellProps} />;
            })}
          </Section>
        </TableView>
      </ScrollView>
    </View>
  );
}

/**
 * Styles for the Restaurants screen components.
 * The layout ensures the restaurant list takes up the full screen width
 * while maintaining proper centering and scrolling behavior.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
});
// end of my code