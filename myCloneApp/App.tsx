import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import NavBar from './components/NavBar';
import GroupInfo from './components/GroupInfo';
import ButtomNav from './components/ButtomNav';
import ImageGrid from './components/ImageGrid';


export default function App() {
  return (
    <View style={styles.container}>
      
        <NavBar />
        <GroupInfo />
      <ScrollView>
        <ImageGrid />
      </ScrollView>
      <ButtomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
