import React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { images, COLORS, icons, FONT, SIZES } from '../components/constants';
import { LinearGradient } from 'expo-linear-gradient';

function Home() {
  
  return (
    <View style={styles.container}>
      <Image source={images.meezyHeureux} style={styles.image} />
      <Text style={styles.text}>Bonjour,{'\n'}Je suis Meezy. Vous avez besoin d'un conseil ? </Text>


      <TouchableOpacity style={styles.button} >
        <LinearGradient
          colors={['#48897F', '#91BDC6']}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Besoin d'un conseil</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={{ marginTop: 50, fontWeight: 'bold' }}>Votre prochain rendez-vous</Text>

      <View style={styles.prochainRDV}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Image source={images.medecin} style={{ width: 60, height: 60, alignSelf: 'flex-start' }} />
          <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Text style={{ fontSize: SIZES.medium, fontWeight: 'bold', color: 'white' }}>Amelie Carty</Text>
            <Text style={{ fontSize: SIZES.medium, color: 'white' }}>Consultante en lactation IBCLC</Text>
            <Text style={{ fontSize: SIZES.small, fontWeight: 'bold', color: 'white', marginTop: 20 }}>le vendredai 24 fevrier a 11:15</Text>
            <TouchableOpacity style={{ marginTop: 20, width: '100%' }} onPress={{}}>
              <Image source={icons.flech} style={{ width: 20, height: 20, alignSelf: 'flex-end', resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10,  }}>
          <Image source={icons.camera} style={{ width: 25, height: 25, resizeMode: 'contain',marginHorizontal:35 }} />
          <Text style={{ fontSize: SIZES.small, fontWeight: 'bold', color: 'white' }}>Teleconsultation</Text>
        </View>


      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  image: {
    width: 133,
    height: 166,
    alignSelf: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    lineHeight: 25.5,
    letterSpacing: 4,
    textAlign: 'left',
    marginTop: 0,
    color: COLORS.secondary,
  },
  gradient: {
    width: 200,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowOffset: { width: -2, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 5,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.white,
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
  prochainRDV: { 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    marginTop: 20, 
    backgroundColor: COLORS.tertiary, 
    padding: 10, 
    borderRadius: 15,
    shadowOffset: { width: -2, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 5,
    shadowRadius: 4, 
  
  }


})
export default Home
