import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.main}>Go by Example</Text>
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
    color: '#dadada'
  },
  main: {
    paddingTop: 60,
    height: 100,
    color: 'white',
  }
});
