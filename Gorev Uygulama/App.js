import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/Header';
import AddTask from './components/AddTask';
import Task from './components/Task';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (value) => {
    setTasks([{ id: uuid.v4(), title: value, isCompleted: false },...tasks]);
  };

  const onOkPress = (id) => {
    const newArray = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newArray);
  };

  const removeTask = (id) => {
    Alert.alert('Uyarı', 'Emin misiniz !', [
      {
        text: 'İptal',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Tamam', onPress: ()=>onOkPress(id) },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddTask addTaskFunc={addTask} />
      <View style={styles.list}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} removeTask={removeTask} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  list: {
    marginTop: 30,
    padding: 20,
  },
});
