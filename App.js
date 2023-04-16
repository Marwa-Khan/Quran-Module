// import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native';
import {widthPercentageToDP as WP} from './components/utils/pixelRatio';
import {heightPercentageToDP as HP} from './components/utils/pixelRatio';
import {scale as SC} from './components/utils/pixelRatio';
import Home from './components/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Surah from './components/screens/Surah';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
    <SafeAreaView style={[{paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0},styles.container]}>
    <NavigationContainer>
    
      {/* <StatusBar style="dark" /> */}

      {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <Home/> */}
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Surah" component={Surah} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:WP(10),

    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
