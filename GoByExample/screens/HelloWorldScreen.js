import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldScreen = () => {
  
  return (
    <View style={styles.container}>
      <BR/>
      <Text style={styles.text}>Our first program will print the classic “hello world” message.</Text>
      <Text style={styles.text}>Here’s the full source code.</Text>
      <BR/>
      <View style={styles.containerdd}>
      <View style={styles.header}>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </View>
      <Text style={styles.code}>
        {'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("hello world")\n}'}
      </Text>
    </View> 
    <BR/>
    <Text style={styles.text}>To run the program, put the code in hello-world.go and use go run hello-world.go.</Text>
    <BR/>
    <Text style={styles.text}>Sometimes we’ll want to build our programs into binaries. We can do this using go build hello-world.go.</Text>
    <BR/>
    <Text style={styles.text}>Now that we can run and build basic Go programs, let’s learn more about the language.</Text>
    <BR/>
    <Text style={styles.text}>Next example: Values.</Text>
    </View>
);
}
// Using <BR /> like <br> in html
const BR = () => <View style={{ height: 23 }} />;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: '',
    backgroundColor: '#1f1f1f',
  },
  containerdd: {
    backgroundColor: '#708090',
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    color: '#dadada',
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4C566A',
    marginRight: 8,
  },
  code: {
    color: '#D8DEE9',
    fontFamily: 'monospace',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default HelloWorldScreen;
