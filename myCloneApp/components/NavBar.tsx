import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from './Icon';

export default function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.centeredText}>
        <Text style={styles.username}>ootd_everyday</Text>
        <Text style={styles.label}>Group Profile</Text>
      </View>
      <Icon
        source={{ uri: 'https://img.icons8.com/ios-glyphs/30/plus-math.png' }}
        size={22}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredText: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#999',
  },
  username: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});
