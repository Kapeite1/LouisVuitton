import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CreateAccount() {
 return (
  <TouchableOpacity style={styles.btnaccount}>
    <View style={styles.logo}>
    <Image
        style={styles.tinyLogo}
        source={require('../../img/LV.png')}
      />
    </View>
    <View style={styles.btnviewtxt}>
      <Text > Crie sua conta</Text>
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnaccount: {
    alignItems: 'center',
    backgroundColor: "#fff",
    height: 70,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  logo: {
    width: '20%',
    height: '100%',
    backgroundColor: '#000',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnviewtxt: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  tinyLogo: {
    height: '43%',
    width: '43%'
  }
});