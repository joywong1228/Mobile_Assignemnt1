import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const GroupInfo = () => {
  const showAlert = () => {
    Alert.alert('Success', 'Assignment 1 Completed');
  };

  return (
    <View style={styles.profileSection}>
      {/* Profile Info Section */}
      <View style={styles.profileInfo}>
        <Image
          source={require('../assets/Profile.avif')}
          
          style={styles.profileImage}
        />
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1,234</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5.6K</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>892</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
      </View>

      {/* Bio Section with Group Names */}
      <View style={styles.bioSection}>
        <Text style={styles.displayName}>Team Instagram Clone</Text>
        <Text style={styles.bio}>👥 Group Members:</Text>
        <Text style={styles.groupMember}>• Ahmad Fakhry</Text>
        <Text style={styles.groupMember}>• Sheeba Hussaini</Text>
        <Text style={styles.groupMember}>• Joy Wong</Text>
        <Text style={styles.bio}>📱 React Native Developers</Text>
        <Text style={styles.bio}>🎓 SAIT Assignment 1</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.followButton} onPress={showAlert}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageButtonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>▼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  bioSection: {
    marginBottom: 15,
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#000',
    marginBottom: 3,
  },
  groupMember: {
    fontSize: 14,
    color: '#0095f6',
    marginBottom: 2,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  followButton: {
    flex: 1,
    backgroundColor: '#0095f6',
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  followButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  messageButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    marginRight: 5,
  },
  messageButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  moreButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dbdbdb',
  },
  moreButtonText: {
    color: '#000',
    fontSize: 14,
  },
});

export default GroupInfo;