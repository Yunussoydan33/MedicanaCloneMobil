import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SaglıkDosyam() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Boş Sayfa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F8FF',
  },
  text: {
    fontSize: 20,
    color: '#2D4159',
    fontWeight: 'bold',
  },
});