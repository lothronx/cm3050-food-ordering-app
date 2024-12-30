// start of my code
/**
 * @fileoverview MenuItemCell component that renders an individual menu item
 * in a restaurant's menu. Each cell displays the item's name, price, and
 * quantity controls for ordering.
 */

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Cell } from "react-native-tableview-simple";

/**
 * MenuItemCell component renders an interactive menu item with quantity controls.
 * Users can increment or decrement the quantity of each item for their order.
 *
 * @param {Object} props - Component props
 * @param {Object} props.item - Menu item details
 * @param {string} props.item.title - Name of the menu item
 * @param {string} props.item.price - Price of the menu item (formatted as "£X.XX")
 * @param {number} props.quantity - Current quantity of this item in the order
 * @param {Function} props.onIncrement - Callback function to increase item quantity
 * @param {Function} props.onDecrement - Callback function to decrease item quantity
 * @returns {React.ReactElement} A cell displaying menu item with quantity controls
 */
export function MenuItemCell({ item, quantity, onIncrement, onDecrement }) {
  return (
    <Cell
      cellContentView={
        <View style={styles.cellContainer}>
          {/* Item details section, including title and price */}
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>

          {/* Quantity control section */}
          <View style={styles.controls}>
            {/* Decrement button */}
            <TouchableOpacity
              onPress={onDecrement}
              style={[styles.button, quantity === 0 && styles.buttonDisabled]}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            {/* Quantity display */}
            <Text style={styles.quantity}>{quantity}</Text>
            {/* Increment button */}
            <TouchableOpacity onPress={onIncrement} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
}

/**
 * Styles for the MenuItemCell component.
 * The layout uses a row-based design with flex properties for proper alignment
 * and spacing. Includes custom styling for interactive elements and visual feedback.
 */
const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  itemInfo: {
    flex: 1,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 12,
    color: "dimgray",
    fontWeight: "500",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    borderRadius: 20,
    padding: 4,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  buttonDisabled: {
    backgroundColor: "#B4B4B6",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 12,
    minWidth: 10,
    textAlign: "center",
  },
});
// end of my code
