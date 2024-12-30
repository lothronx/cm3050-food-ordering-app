// start of my code
/**
 * @fileoverview Restaurant Menu screen component that displays menu items and handles order quantities.
 * This screen shows categorized menu items for a specific restaurant and manages item quantities
 * and total order calculation.
 */

import React, { useLayoutEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import { RESTAURANTS } from "../restaurantsData";
import { MenuItemCell } from "../components/MenuItemCell";

/**
 * Menu screen component that displays restaurant menu items with quantity controls.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.route - Route object containing navigation params
 * @param {Object} props.navigation - Navigation object for screen management
 * @param {string} props.route.params.restaurantName - Name of the selected restaurant
 * @returns {React.ReactElement} Menu screen UI with interactive menu items
 */
export function Menu({ route, navigation }) {
  const { restaurantName } = route.params;

  // Show the selected restaurant's name as the screen title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: restaurantName,
    });
  }, [navigation, restaurantName]);

  // Load the selected restaurant's menu
  const restaurant = RESTAURANTS.find((item) => item.title === restaurantName);
  const menu = restaurant?.menu || [];

  // State to track quantities of each menu item
  const [quantities, setQuantities] = useState({});

  /**
   * Updates the quantity of a specific menu item
   * 
   * @param {number} sectionIndex - Index of the menu section
   * @param {number} itemIndex - Index of the menu item within its section
   * @param {number} change - Amount to change the quantity by (+1 or -1)
   */
  const updateQuantity = (sectionIndex, itemIndex, change) => {
    const itemKey = `${sectionIndex}-${itemIndex}`;
    const currentQuantity = quantities[itemKey] || 0;
    const newQuantity = Math.max(0, currentQuantity + change);
    setQuantities((prev) => ({
      ...prev,
      [itemKey]: newQuantity,
    }));
  };

  /**
   * Calculates the total price of all selected items
   * 
   * @returns {string} Formatted total price with 2 decimal places
   */
  const calculateTotal = () => {
    let total = 0;
    menu.forEach((section, sectionIndex) => {
      section.contents.forEach((item, itemIndex) => {
        const itemKey = `${sectionIndex}-${itemIndex}`;
        const quantity = quantities[itemKey] || 0;
        total += parseFloat(item.price.replace("£", "")) * quantity; // Convert price from to number, e.g., "£5.50" to 5.5
      });
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TableView>
          {menu.map((section, sectionIndex) => (
            <Section key={sectionIndex} header={section.title}>
              {section.contents.map((item, itemIndex) => {
                const itemKey = `${sectionIndex}-${itemIndex}`;
                const quantity = quantities[itemKey] || 0;
                return (
                  <MenuItemCell
                    key={itemIndex}
                    item={item}
                    quantity={quantity}
                    onIncrement={() => updateQuantity(sectionIndex, itemIndex, 1)}
                    onDecrement={() => updateQuantity(sectionIndex, itemIndex, -1)}
                  />
                );
              })}
            </Section>
          ))}
        </TableView>
      </ScrollView>
      <Cell title={`Total: £${calculateTotal()}`} titleTextStyle={styles.total} />
    </View>
  );
}

/**
 * Styles for the Menu screen components
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  total: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "right",
    paddingRight: 12,
    paddingVertical: 5,
  },
});
// end of my code