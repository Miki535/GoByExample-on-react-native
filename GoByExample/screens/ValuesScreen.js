import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";

const ValuesScreen = () => {

    return (
        <View style={styles.container}>
          <BR/>
          <Text style={styles.text}>Go has various value types including strings, integers, floats, booleans, etc. Here are a few basic examples.</Text>
          <BR/>
          <View style={styles.codeContainer}>
          <View style={styles.header}>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
          </View>
          <Text style={styles.code}>
            {'package main\n\nimport "fmt"\n\nfunc main() {\n    \n    fmt.Println("go" + "lang")\n    \n    fmt.Println("1+1 =", 1+1)\n    fmt.Println("7.0/3.0 =", 7.0/3.0)\n        \n    fmt.Println(true && false)\n    fmt.Println(true || false)\n    fmt.Println(!true)\n}'}
          </Text>
        </View> 
        <BR/>
        <ScrollView>
        <Text style={styles.text}>Strings, which can be added together with +.</Text>
        <BR/>
        <Text style={styles.text}>Integers and floats.</Text>
        <BR/>
        <Text style={styles.text}>Booleans, with boolean operators as you’d expect.</Text>
        <BR/>
        <Text style={styles.text}>Next example: Variables.</Text>
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
        fontSize: Platform.OS === "ios"? 20: 15,
        lineHeight: 22,
      },
    });

export default ValuesScreen;