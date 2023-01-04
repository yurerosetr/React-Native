import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHiglight,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [count, setCounter] = useState(0);
  const [isVisible, setVisible] = useState(false);

  const sifirla = () => {
    setCounter(0);
    setVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{count}</Text>
      <Button title="Arttır" onPress={() => setCounter(count + 1)} />
      <TouchableOpacity
        style={{ padding: 8, marginVertical: 10 }}
        onPress={() => setCounter(count - 1)}>
        <Text style={{ textAlign: 'center' }}>Azalt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: '#445577', padding: 10 }}
        onPress={sifirla}>
        <Text style={{ textAlign: 'center' }}>Sıfırla</Text>
      </TouchableOpacity>
      {isVisible ? <Text><b>Lan Niye Sıfırladın!</b></Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
