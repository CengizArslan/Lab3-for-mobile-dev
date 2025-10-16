/**
 * App.js
 * React Native Contact Manager App in plain JavaScript
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import ContactListScreen from './src/screens/ContactList/ContactListScreen';
import ContactDetailsScreen from './src/screens/ContactDetails/ContactDetailsScreen';
import AddContactScreen from './src/screens/AddContact/AddContactScreen';

const Stack = createNativeStackNavigator();

function App() {
  // Determine dark mode
  const isDarkMode = false; // or use useColorScheme() if you want dynamic theme

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContactList">
          {/* Contact list screen */}
          <Stack.Screen
            name="ContactList"
            component={ContactListScreen}
            options={{ title: 'Contacts' }}
          />
          {/* Contact details screen */}
          <Stack.Screen
            name="ContactDetails"
            component={ContactDetailsScreen}
            options={{ title: 'Contact Details' }}
          />
          {/* Add contact screen */}
          <Stack.Screen
            name="AddContact"
            component={AddContactScreen}
            options={{ title: 'Add Contact' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
