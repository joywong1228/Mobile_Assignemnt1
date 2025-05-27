import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type NumberDisplayProps = {
  label: string;
  value: number;
};

export default function NumberDisplay({ label, value }: NumberDisplayProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  label: {
    fontSize: 15,
    color: '#444',
  },
});
