import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import { validateContact } from '../../utils/validation';

/*
  Form component to edit an existing contact
  Props:
    - contact: contact object to edit
    - onSubmit: function to call with updated contact
*/
const EditContactForm = ({ contact, onSubmit }) => {
  const [formData, setFormData] = useState(contact);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const validationErrors = validateContact(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    Alert.alert('Success', 'Contact updated successfully');
    onSubmit(formData);
  };

  return (
    <View>
      <Input
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
        placeholder="Name"
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <Input
        value={formData.phone}
        onChangeText={(text) => handleChange('phone', text)}
        placeholder="Phone"
      />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

      <Input
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        placeholder="Email"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Button title="Save Changes" onPress={handleSubmit} accessibilityLabel="Save Changes Button" />
    </View>
  );
};

const styles = StyleSheet.create({
  error: { color: 'red', marginBottom: 5 },
});

export default EditContactForm;
