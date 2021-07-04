import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraphStyle}>
Ciclo Periódico Feminino
      </Text>
          <Image
            source={require('./assets/ciclo.jpg')}
            style={styles.logo}
          />
      <Text style={styles.paragraphStyle}>
                    O app tem por finalidade ilustrativa mostrar algumas sugestões, como também informações importantes sobre o Calendário periódico feminino, tanto para as mulheres se situarem sobre o funcionamento do ciclo, quanto para os homens saibam o que deve ou não fazer nesses períodos.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffdddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraphStyle: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height:200,
  },
});

export default Home;
