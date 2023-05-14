
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import RendezVous from './src/screens/RendezVous';
import Compte from './src/screens/Compte';
import Meezy from './src/screens/Meezy';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Home' options={{ title: 'Overview' }}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="RendezVous" component={RendezVous} />
      <Tab.Screen name="Compte" component={Compte} />
      <Tab.Screen name="Meezy" component={Meezy} />
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
