import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";

const HowToUseScreen = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>development in progress</Text>
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
        fontSize: 30,
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

export default HowToUseScreen;