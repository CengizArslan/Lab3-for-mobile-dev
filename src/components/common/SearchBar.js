import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

/*
  Reusable SearchBar component
  Props:
    - value: current search query
    - onChangeText: callback when user types
*/
const SearchBar = ({ value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder="Search contacts..."
    value={value}
    onChangeText={onChangeText}
    accessibilityLabel="Search contacts" // for screen readers
  />
);

// Styles for search bar
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

// React.memo to avoid unnecessary re-renders
export default React.memo(SearchBar);
