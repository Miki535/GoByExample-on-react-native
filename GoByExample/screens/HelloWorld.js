import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World Explanation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
  },
});

export default HelloWorldScreen;
