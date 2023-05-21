
import { StyleSheet, Text, View, Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import RendezVous from './src/screens/RendezVous';
import Compte from './src/screens/Compte';
import Meezy from './src/screens/Meezy';
import Header from './src/components/Header';
import { images,COLORS,icons } from './src/components/constants';
//import font
import * as FONT from 'expo-font';
import React from 'react';
import { useFonts } from 'expo-font';




export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // const [loaded] = useFonts({
  //   GBold: require('./src/assets/fonts/Gilroy-ExtraBold.otf'),
  //   GLight: require('./src/assets/fonts/Gilroy-Light.otf'),
    
  // });
  // if (!loaded) {  
  //   return null;
  // }




  
  
  

  return (

    <NavigationContainer>
    <Header/>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false ,
      tabBarIcon: ({ focused,color, size }) => {
        let icon;

        switch (route.name) {
          case 'Home':
            icon = focused? icons.homeActive : icons.home ;
            break;
          case 'Rendez-vous':
            icon = focused? icons.rdvActive : icons.rdv;
            break;
          case 'Meezy':
            icon = focused? icons.meezyActive : icons.meezy;
            break;
          case 'Compte':
            icon = focused? icons.compteActive : icons.compte ;
            break;
          default:
            icon = icons.home;
            break;
        }

        // You can add tintColor to the image if you want to change colors
        return <Image source={icon} style={{ width: size, height: size, tintColor:"white", }} />;
      },
      tabBarStyle: {
        backgroundColor: COLORS.primary,
      },
    })
  }

    tabBarOptions={{
      activeTintColor: "white",
      inactiveTintColor: 'white',
      
  }}
  
  
  
    
  >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Rendez-vous" component={RendezVous} />
      <Tab.Screen name="Meezy" component={Meezy} />
      <Tab.Screen name="Compte" component={Compte} />
    </Tab.Navigator>
  </NavigationContainer>
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
