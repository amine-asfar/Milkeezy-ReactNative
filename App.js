
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


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
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
            icon = focused? icons.home : icons.homeActive ;
            break;
          case 'Rendez-vous':
            icon = focused? icons.rdv : icons.rdvActive ;
            break;
          case 'Meezy':
            icon = focused? icons.meezy : icons.meezyActive ;
            break;
          case 'Compte':
            icon = focused? icons.compte : icons.compteActive ;
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
