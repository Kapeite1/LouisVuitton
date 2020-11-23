import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function TwoItens() {

  function Teste(){
    return (
      <TouchableOpacity style={styles.btnItem}>
        <View style={styles.areaImg}>
          <Image
          style={styles.image1}
          source={require('../../img/mochila.png')}
        />
        </View>
        <View style={styles.areaText}>
          <Text>DISCOVERY BACKPACK PM</Text>
          <Text>R$ 14.000,00</Text>
        </View>
      </TouchableOpacity>
    )
  }

 return (
   <View style={styles.areaItens}>
     <Teste/>
     <Teste/>
   </View>
  );
}

const styles = StyleSheet.create({
  areaItens: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  btnItem: {
    alignItems: 'center',
    backgroundColor: "#fff",
    height: 270,
    width: '48%',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
    justifyContent: 'space-between'
  },
  areaImg:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#F5F5F5',
    height: '70%',
    width: '100%',
    alignItems: "center",
    justifyContent: 'center'
  },
  image1: {
    width: '80%',
    height: '80%',
  },
  areaText: {
    height: '30%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  }

});