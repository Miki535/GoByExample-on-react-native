import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Linking, View, TouchableOpacity } from 'react-native';

export default function App() {
  
  const handlePress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.main}>Go by Example</Text>
      <ScrollView>
      <BR />
      <TouchableOpacity onPress={handlePress}>
          <Text style={styles.text}>Go is an open source programming language designed for building scalable, secure and reliable software. Please read the official documentation to learn more.</Text>
        </TouchableOpacity>
      <BR />
      <TouchableOpacity onPress={handlePress}>
          <Text style={styles.text}>Go by Example is a hands-on introduction to Go using annotated example programs. Check out the first example or browse the full list below. </Text>
      </TouchableOpacity>
      <BR />
      <TouchableOpacity onPress={handlePress}>
          <Text style={styles.text}>Unless stated otherwise, examples here assume the latest major release Go. </Text>
      </TouchableOpacity>
      <View style={styles.centeredContainer}>
      <Text style={styles.textB}>Hello World</Text>
      <Text style={styles.textB}></Text>
      </View>
     </ScrollView>
    <StatusBar style="auto" />
    </View>
  );
}
// Using <BR /> like <br> in html
const BR = () => <View style={{ height: 23 }} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
  },
  text: {
    color: '#dadada',
    fontSize: '13.5',
    fontWeight: '200',
  },
  main: {
    paddingTop: 60,
    height: 100,
    color: 'white',
    fontWeight: '200',
    fontSize: '33',
  },
  textB: {
    alignItems: 'center',
    color: '#dadada',
    fontSize: '17.5',
    fontWeight: '235'
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  link: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: '13.5',
    fontWeight: '200',
  },
});
