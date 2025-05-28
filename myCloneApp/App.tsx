import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import NavBar from './components/NavBar';
import GroupInfo from './components/GroupInfo';
import ImageGrid from './components/ImageGrid';
import BottomNav from './components/ButtomNav';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <NavBar />
        <GroupInfo />
        <ImageGrid />
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
