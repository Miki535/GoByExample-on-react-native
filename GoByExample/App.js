import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Go by Example</Text>
      <ScrollView>
      <Text></Text>
      <Text style={styles.text}>Go is an open source programming language designed for building scalable, secure and reliable software. Please read the official documentation to learn more. </Text>
      <Text></Text>
      <Text style={styles.text}>Go by Example is a hands-on introduction to Go using annotated example programs. Check out the first example or browse the full list below. </Text>
      <Text></Text>
      <Text style={styles.text}>Unless stated otherwise, examples here assume the latest major release Go. </Text>
     </ScrollView>
    <StatusBar style="auto" />
    </View>
  );
}

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
  }
});
