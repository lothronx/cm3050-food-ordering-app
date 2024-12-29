import React, { useLayoutEffect, useState } from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import { RESTAURANTS } from "../restaurantsData";
import { MenuItemCell } from "../components/MenuItemCell";

export function Menu({ route, navigation }) {
  const { restaurantName } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: restaurantName,
    });
  }, [navigation, restaurantName]);

  const restaurant = RESTAURANTS.find((item) => item.title === restaurantName);
  const menu = restaurant?.menu || [];

  const [quantities, setQuantities] = useState({});

  const updateQuantity = (sectionIndex, itemIndex, change) => {
    const itemKey = `${sectionIndex}-${itemIndex}`;
    const currentQuantity = quantities[itemKey] || 0;
    const newQuantity = Math.max(0, currentQuantity + change);
    setQuantities((prev) => ({
      ...prev,
      [itemKey]: newQuantity,
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    menu.forEach((section, sectionIndex) => {
      section.contents.forEach((item, itemIndex) => {
        const itemKey = `${sectionIndex}-${itemIndex}`;
        const quantity = quantities[itemKey] || 0;
        total += parseFloat(item.price.replace("£", "")) * quantity;
      });
    });
    return total.toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <Cell
        title={`Total: £${calculateTotal()}`}
        contentContainerStyle={styles.totalContainer}
        titleTextStyle={styles.total}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  totalContainer: {
    backgroundColor: "#F2F2F7",
  },
  total: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "right",
    paddingRight: 12,
    paddingVertical: 5,
  },
});
