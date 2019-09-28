import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from "./welcomes_screen"
import DeckSwipeHelp from "./DeckSwiper"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Homescreen/> */}
      <DeckSwipeHelp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffedf1"
  },
});
