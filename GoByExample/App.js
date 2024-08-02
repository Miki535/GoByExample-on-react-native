import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Linking, View, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HelloWorldScreen from './screens/HelloWorldScreen';
import ValuesScreen from './screens/ValuesScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  
  const handlePress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  return (
    <View style={styles.container}>
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
      <View>
        <BR/>
       <TouchableOpacity onPress={() => navigation.navigate('HelloWorld')}>
          <Text style={styles.textB}>Hello World</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Values')}>
        <Text style={styles.textB}>Values</Text>
      </TouchableOpacity>
      <Text style={styles.textB}>Variables</Text>
      <Text style={styles.textB}>Constants</Text>
      <Text style={styles.textB}>For</Text>
      <Text style={styles.textB}>If/Else</Text>
      <Text style={styles.textB}>Switch</Text>
      <Text style={styles.textB}>Arrays</Text>
      <Text style={styles.textB}>Slices</Text>
      <Text style={styles.textB}>Maps</Text>
      <Text style={styles.textB}>Range</Text>
      <Text style={styles.textB}>Functions</Text>
      <Text style={styles.textB}>Multiple Return Values</Text>
      <Text style={styles.textB}>Variadic Functions</Text>
      <Text style={styles.textB}>Closures</Text>
      <Text style={styles.textB}>Recursion</Text>
      <Text style={styles.textB}>Pointers</Text>
      <Text style={styles.textB}>Strings and Runes</Text>
      <Text style={styles.textB}>Structs</Text>
      <Text style={styles.textB}>Methods</Text>
      <Text style={styles.textB}>Interfaces</Text>
      <Text style={styles.textB}>Enums</Text>
      <Text style={styles.textB}>Struct Embedding</Text>
      <Text style={styles.textB}>Generics</Text>
      <Text style={styles.textB}>Errors</Text>
      <Text style={styles.textB}>Custom Errors</Text>
      <Text style={styles.textB}>Goroutines</Text>
      <Text style={styles.textB}>Channels</Text>
      <Text style={styles.textB}>Channel Buffering</Text>
      <Text style={styles.textB}>Channel Synchronization</Text>
      <Text style={styles.textB}>Channel Directions</Text>
      <Text style={styles.textB}>Select</Text>
      <Text style={styles.textB}>Timeouts</Text>
      <Text style={styles.textB}>Non-Blocking Channel Operations</Text>
      <Text style={styles.textB}>Closing Channels</Text>
      <Text style={styles.textB}>Range over Channels</Text>
      <Text style={styles.textB}>Timers</Text>
      <Text style={styles.textB}>Tickers</Text>
      <Text style={styles.textB}>Worker Pools</Text>
      <Text style={styles.textB}>WaitGroups</Text>
      <Text style={styles.textB}>Rate Limiting</Text>
      <Text style={styles.textB}>Atomic Counters</Text>
      <Text style={styles.textB}>Mutexes</Text>
      <Text style={styles.textB}>Stateful Goroutines</Text>
      <Text style={styles.textB}>Sorting</Text>
      <Text style={styles.textB}>Sorting by Functions</Text>
      <Text style={styles.textB}>Panic</Text>
      <Text style={styles.textB}>Defer</Text>
      <Text style={styles.textB}>Recover</Text>
      <Text style={styles.textB}>String Functions</Text>
      <Text style={styles.textB}>String Formatting</Text>
      <Text style={styles.textB}>Text Templates</Text>
      <Text style={styles.textB}>Regular Expressions</Text>
      <Text style={styles.textB}>JSON</Text>
      <Text style={styles.textB}>XML</Text>
      <Text style={styles.textB}>Time</Text>
      <Text style={styles.textB}>Epoch</Text>
      <Text style={styles.textB}>Time Formatting / Parsing</Text>
      <Text style={styles.textB}>Random Numbers</Text>
      <Text style={styles.textB}>Number Parsing</Text>
      <Text style={styles.textB}>URL Parsing</Text>
      <Text style={styles.textB}>SHA256 Hashes</Text>
      <Text style={styles.textB}>Base64 Encoding</Text>
      <Text style={styles.textB}>Reading Files</Text>
      <Text style={styles.textB}>Writing Files</Text>
      <Text style={styles.textB}>Line Filters</Text>
      <Text style={styles.textB}>File Paths</Text>
      <Text style={styles.textB}>Directories</Text>
      <Text style={styles.textB}>Temporary Files and Directories</Text>
      <Text style={styles.textB}>Embed Directive</Text>
      <Text style={styles.textB}>Testing and Benchmarking</Text>
      <Text style={styles.textB}>Command-Line Arguments</Text>
      <Text style={styles.textB}>Command-Line Flags</Text>
      <Text style={styles.textB}>Command-Line Subcommands</Text>
      <Text style={styles.textB}>Environment Variables</Text>
      <Text style={styles.textB}>Logging</Text>
      <Text style={styles.textB}>HTTP Client</Text>
      <Text style={styles.textB}>HTTP Server</Text>
      <Text style={styles.textB}>Context</Text>
      <Text style={styles.textB}>Spawning Processes</Text>
      <Text style={styles.textB}>Exec'ing Processes</Text>
      <Text style={styles.textB}>Signals</Text>
      <Text style={styles.textB}>Exit</Text>
      <Text style={styles.textB}></Text>
      <BR/>
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
    fontSize: 13.5,
    fontWeight: '200',
  },
  main: {
    paddingTop: 60,
    height: 100,
    color: 'white',
    fontWeight: '200',
    fontSize: 33,
  },
  textB: {
    alignItems: 'center',
    color: '#dadada',
    fontSize: Platform.OS === "ios"? 25: 17,
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontStyle: 'normal',
    fontFamily: Platform.OS === "ios"? 'Times New Roman': 'serif',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#1f1f1f' }, 
          headerTintColor: '#dadada', 
          headerTitleStyle: { 
            fontWeight: '200',
            fontSize: 33,
            fontFamily: Platform.OS === "ios"? 'Times New Roman': 'serif',
          },
          headerTitleAlign: 'center', 
        }}
      >
        <Stack.Screen name="Go by Example" component={HomeScreen} />
        <Stack.Screen 
          name="HelloWorld" //Screen name used for navigation
          component={HelloWorldScreen}
          options={{ title: 'Hello World!' }}
        />
        <Stack.Screen 
          name="Values" // Screen name used for navigation
          component={ValuesScreen}
          options={{ title: 'Values' }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
