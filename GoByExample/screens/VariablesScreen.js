import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";

const VariablesScreen = () => {

    return (
        <View style={styles.container}>
          <BR/>
          <Text style={styles.text}>In Go, variables are explicitly declared and used by the compiler to e.g. check type-correctness of function calls.</Text>
          <BR/>
          <View style={styles.codeContainer}>
          <View style={styles.header}>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
          </View>
          <Text style={styles.code}>
            {'package main\n\nimport "fmt"\n\nfunc main() {\n    \n    var a = "initial"\n    fmt.Println(a)\n\n    var b, c int = 1, 2\n    fmt.Println(b, c)\n    fmt.Println(true || false)\n    fmt.Println(!true)\n}'}
          </Text>
        </View> 
        <BR/>
        <ScrollView>
        <Text style={styles.text}>var declares 1 or more variables.</Text>
        <BR/>
        <Text style={styles.text}>You can declare multiple variables at once.</Text>
        <BR/>
        <Text style={styles.text}>Go will infer the type of initialized variables.</Text>
        <BR/>
        <Text style={styles.text}>Variables declared without a corresponding initialization are zero-valued. For example, the zero value for an int is 0.</Text>
        <BR/>
        <Text style={styles.text}>The := syntax is shorthand for declaring and initializing a variable, e.g. for var f string = "apple" in this case. This syntax is only available inside functions.</Text>
        <BR/>
        <Text style={styles.text}> Next example: Constants.</Text>
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

export default VariablesScreen;