import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";

const ExitScreen = () => {

    return (
        <View style={styles.container}>
          <BR/>
          <Text style={styles.text}>Use os.Exit to immediately exit with a given status.</Text>
          <BR/>
          <View style={styles.codeContainer}>
          <View style={styles.header}>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
          </View>
          <Text style={styles.code}>
            {'package main\n\nimport ( \n           "fmt"\n           "os"\n)\n\nfunc main() {\n    \n    defer fmt.Println("!")\n    \n    os.Exit(3)\n}'}
          </Text>
        </View> 
        <BR/>
        <ScrollView>
        <Text style={styles.text}>defers will not be run when using os.Exit, so this fmt.Println will never be called.</Text>
        <BR/>
        <Text style={styles.text}>Exit with status 3.</Text>
        <BR/>
        <Text style={styles.text}>Note that unlike e.g. C, Go does not use an integer return value from main to indicate exit status. If you’d like to exit with a non-zero status you should use os.Exit.</Text>
        <BR/>
        <Text style={styles.text}>If you run exit.go using go run, the exit will be picked up by go and printed.</Text>
        <BR/>
        <Text style={styles.text}>By building and executing a binary you can see the status in the terminal.</Text>
        <BR/>
        <Text style={styles.text}>Note that the ! from our program never got printed.</Text>
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
        fontSize: Platform.OS === "ios"? 20: 15,
        lineHeight: 19,
      },
    });

export default ExitScreen;