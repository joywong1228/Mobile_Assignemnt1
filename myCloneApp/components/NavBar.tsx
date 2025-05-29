import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface TopBarProps {
  onBack?: () => void;
  onAdd?: () => void;
  username?: string;
  label?: string;
}

const TopBar: React.FC<TopBarProps> = ({
  onBack,
  onAdd,
  username = 'Group Profile',
  label = 'ootd_everyday',
}) => {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity onPress={onBack} style={styles.sideButton}>
        <Feather name="chevron-left" size={28} color="#000" />
      </TouchableOpacity>

      <View style={styles.centeredText}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      
      <TouchableOpacity onPress={onAdd} style={styles.sideButton}>
        <View style={styles.igAddButton}>
          <Feather name="plus" size={20} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    flex: 1,
    alignItems: 'center',
  },
  username: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  label: {
    fontSize: 12,
    color: '#999',
  },
  igAddButton: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TopBar;
