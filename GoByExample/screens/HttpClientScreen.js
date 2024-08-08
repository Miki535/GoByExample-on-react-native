import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';

const HttpClientScreen = () => {
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>The Go standard library comes with excellent support for HTTP clients and servers in the net/http package. In this example we’ll use it to issue simple HTTP requests.</Text>
      <BR/>
      <View style={styles.codeContainer}>
      <View style={styles.header}>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </View>
      <Text style={styles.code}>
        {'package main\n\nimport (\n        "bufio"\n        "fmt"\n        "net/http"\n)\n\nfunc main() {\n        resp, err := http.Get("https://gobyexample.com")\n        if err != nil {\n             panic(err)\n        }\n        defer resp.Body.Close()\n\n        fmt.Println("Response status:", resp.Status)\n        \n        scanner := bufio.NewScanner(resp.Body)\n        for i := 0; scanner.Scan() && i < 5; i++ {\n             fmt.Println(scanner.Text())\n        }    \n        if err := scanner.Err(); err != nil{\n             panic(err)\n        }\n}'}
      </Text>
    </View> 
    <BR/>
    <Text style={styles.text}>Issue an HTTP GET request to a server. http.Get is a convenient shortcut around creating an http.Client object and calling its Get method; it uses the http.DefaultClient object which has useful default settings.</Text>
    <BR/>
    <Text style={styles.text}>Print the HTTP response status.</Text>
    <BR/>
    <Text style={styles.text}>Print the first 5 lines of the response body.</Text>
    <BR/>
    <Text style={styles.text}>Next example: HTTP Server.</Text>
    <BR/>
      </ScrollView>
    </View>
);
}
// Using <BR /> like <br> in html
const BR = () => <View style={{ height: 23 }} />;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'left',
    backgroundColor: '#1f1f1f',
  },
  codeContainer: {
    backgroundColor: '#708090',
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    color: '#dadada',
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'serif',
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
    fontFamily: Platform.OS === "ios"? 'Times New Roman': 'serif',
    fontSize: Platform.OS === "ios"? 14: 10,
    lineHeight: 14,
  },
});

export default HttpClientScreen;
