import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/*
  Reusable Button component
  Props:
    - title: button text
    - onPress: callback when pressed
    - accessibilityLabel: label for screen readers
*/
const Button = ({ title, onPress, accessibilityLabel }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
    accessibilityLabel={accessibilityLabel}
    accessibilityRole="button"
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

// Styles for the button
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// React.memo to prevent unnecessary re-renders
export default React.memo(Button);
