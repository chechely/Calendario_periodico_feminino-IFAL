import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Home from './components/home';
import Periodo from './components/periodo';
import Calendario from './components/calendario';
import Importante from './components/importante';
const App = () => {
  const [index, setIndex] = useState(1);

  const RenderElement = () => {
    if (index === 1) {
      return <Home />;
    } else if (index === 2) {
      return <Periodo/>;
    } 
    else if (index === 3) {
      return <Calendario/>;
    }
    else {
      return <Importante />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(1)}>
            <Text style={{ color: '#ffffff' }}>Home</Text>
          </TouchableOpacity>
          {}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(2)}>
            <Text style={{ color: '#ffffff' }}>O que é</Text>
          </TouchableOpacity>
          {}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(3)}>
            <Text style={{ color: '#ffffff' }}>Calendario</Text>
          </TouchableOpacity>
          {}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(4)}>
            <Text style={{ color: '#ffffff' }}>Importante</Text>
          </TouchableOpacity>
        </View>
        {}
        {}
        <View style={{ backgroundColor: '#ffffff' }}>
          <RenderElement />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdddd',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 20,
  },
});

export default App;
