import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Section, TableView } from "react-native-tableview-simple";
import { RESTAURANTS } from "../restaurantsData";
import { HomescreenCell } from "../components/HomescreenCell";

export function Restaurants({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TableView>
          <Section header="" hideSeparator separatorTintColor="#ccc">
            {RESTAURANTS.map((items, index) => {
              const { menu, ...cellProps } = items;
              return <HomescreenCell key={index} navigation={navigation} {...cellProps} />;
            })}
          </Section>
        </TableView>
      </ScrollView>
    </View>
  );
}

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
