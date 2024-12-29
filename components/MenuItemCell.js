import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Cell } from "react-native-tableview-simple";

export function MenuItemCell({ item, quantity, onIncrement, onDecrement }) {
  return (
    <Cell
      cellContentView={
        <View style={styles.cellContainer}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={onDecrement}
              style={[styles.button, quantity === 0 && styles.buttonDisabled]}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              onPress={onIncrement}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  itemInfo: {
    flex: 1,
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
