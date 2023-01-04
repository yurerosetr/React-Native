import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, Alert } from 'react-native';

const AddTask = ({ addTaskFunc }) => {
  const [text, setText] = useState('');

  const onTextInputChange = (val) => {
    setText(val);
  };

  const onButtonPress = () => {
    if (text !== '') {
      addTaskFunc(text);
      setText('');
    } else {
      Alert.alert('Uyarı', 'Boş bırakmayınız !', [
        {
          text: 'İptal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Tamam', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Yeni Görev"
        onChangeText={(val) => onTextInputChange(val)}
        value={text}
      />
      <Button title="EKLE" color="blue" onPress={onButtonPress} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default AddTask;
