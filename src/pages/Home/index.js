import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import CreateAccount from '../../components/CreateAccount';
import OneItem from '../../components/OneItem';
import TwoItens from '../../components/TwoItens';

export default function Home() {
 return (
   <ScrollView style={styles.container}>
     <CreateAccount/>
     <OneItem/>
     <TwoItens/>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#eaeaea",
    paddingTop: 15,
  }
});