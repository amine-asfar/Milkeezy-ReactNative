// Header.js

import React from 'react';
import { View, Image, StyleSheet ,SafeAreaView,} from 'react-native';

import { images,COLORS,icons } from './constants';
import {useSafeAreaInsets,} from 'react-native-safe-area-context';



const Header = () => {
    

  return (
    <SafeAreaView style={{backgroundColor:COLORS.primary}}>
    <View style={styles.header}>
      <Image source={images.logo} style={styles.image}/>

      <Image source={icons.aide} style={styles.icon}/>
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   
   
    backgroundColor: COLORS.primary,

  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 10,
    }
});

export default Header;
