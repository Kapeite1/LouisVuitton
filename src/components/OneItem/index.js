import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function OneItem() {
 return (
  <TouchableOpacity style={styles.btnItem}>
    <View style={{ position: 'absolute', height: '75%', width: 5, right:'50%', backgroundColor: '#fff', zIndex: 1,}}/>
    <View style={styles.areaImg}>
      
      <Image
        style={styles.image1}
        source={require('../../img/anel1.png')}
      />
      <Image
        style={styles.image2}
        source={require('../../img/anel11.png')}
      />
    </View>
    <View style={styles.areaText}>
      <Text style={styles.title}>COLEÇÃO LT VOLT</Text>
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnItem: {
    alignItems: 'center',
    backgroundColor: "#fff",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  areaImg: {
    height: '75%',
    width: '100%',
    flexDirection: 'row',
    borderTopLeftRadius: 10,

  },
  areaText: {
    height: '25%',
    width: '100%',

    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  image1: {
    borderTopLeftRadius: 10,
    width: '50%',
    height: '100%'
  },
  image2: {
    borderTopRightRadius: 10,
    width: '50%',
    height: '100%'
  }

});