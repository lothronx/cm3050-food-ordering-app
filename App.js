//start of my code
/**
 * @fileoverview Main application component for the Food Ordering App.
 * This file sets up the root navigation stack using React Navigation.
 */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Restaurants } from "./screens/Restaurants";
import { Menu } from "./screens/Menu";

// Create a stack navigator for managing screen navigation
const Stack = createNativeStackNavigator();

/**
 * Root component of the Food Ordering App.
 * Sets up the navigation structure with two main screens:
 * - Restaurants: Displays a list of available restaurants
 * - Menu: Shows the menu items for a selected restaurant
 * 
 * @returns {React.ReactElement} The root navigation container with configured screens
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Restaurants">
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//end of my code
