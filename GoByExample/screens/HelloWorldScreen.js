import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <BR/>
      <Text style={styles.text}>Our first program will print the classic “hello world” message.</Text>
      <Text style={styles.text}>Here’s the full source code.</Text>
    </View>
  );
};
// Using <BR /> like <br> in html
const BR = () => <View style={{ height: 23 }} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
  },
  text: {
    fontSize: 25,
    color: '#dadada',
    fontWeight: '200'
  },
});

export default HelloWorldScreen;
