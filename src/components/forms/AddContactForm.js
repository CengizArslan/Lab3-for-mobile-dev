import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import { validateContact } from '../../utils/validation';

/*
  Form component for adding a new contact
  Props:
    - onSubmit: function called with new contact object when form is valid
*/
const AddContactForm = ({ onSubmit }) => {
  // Local state for contact input fields
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });

  // Local state for form validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes dynamically
  const handleChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    const validationErrors = validateContact(contact); // validate inputs
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // show errors if any
      return;
    }
    onSubmit(contact); // call parent function with valid contact
  };

  return (
    <View>
      {/* Name Input */}
      <Input
        value={contact.name}
        onChangeText={(text) => handleChange('name', text)}
        placeholder="Name"
        accessibilityLabel="Name input"
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      {/* Phone Input */}
      <Input
        value={contact.phone}
        onChangeText={(text) => handleChange('phone', text)}
        placeholder="Phone"
        accessibilityLabel="Phone input"
      />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

      {/* Email Input */}
      <Input
        value={contact.email}
        onChangeText={(text) => handleChange('email', text)}
        placeholder="Email"
        accessibilityLabel="Email input"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      {/* Submit Button */}
      <Button
        title="Add Contact"
        onPress={handleSubmit}
        accessibilityLabel="Add Contact Button"
      />
    </View>
  );
};

// Styles for error messages
const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginBottom: 5,
  },
});

export default AddContactForm;
