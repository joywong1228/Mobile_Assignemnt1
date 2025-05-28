import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const ButtomNav = () => {
  const showAlert = () => {
    Alert.alert('Success', 'Assignment 1 Completed');
  };

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>🔍</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>➕</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>❤️</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={showAlert}>
      <Image
        source={require('../assets/Profile.avif')}
        style={styles.navProfileImage}
      />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: '#e0e0e0',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 24,
    color: '#000',
  },
  navProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default ButtomNav;