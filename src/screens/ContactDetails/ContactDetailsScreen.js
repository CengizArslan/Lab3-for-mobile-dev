import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { contacts } from '../../data/contactsData';

/*
  Screen to display detailed information about a single contact
  Props:
    - route: contains parameters passed during navigation (contactId)
*/
const ContactDetailsScreen = ({ route }) => {
  const { contactId } = route.params;

  // Find the contact by ID from the contacts array
  const contact = contacts.find((c) => c.id === contactId);

  if (!contact) {
    return (
      <View style={styles.container}>
        <Text>Contact not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{contact.name}</Text>

      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>{contact.phone}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{contact.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontWeight: 'bold', fontSize: 16, marginTop: 10 },
  value: { fontSize: 16, marginBottom: 5 },
});

export default ContactDetailsScreen;
