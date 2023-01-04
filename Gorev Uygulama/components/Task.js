import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable,TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';

const Task = ({ task, removeTask }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Pressable onPress={() => setChecked(!isChecked)}>
      <View style={styles.item}>
        <View style={styles.checkBoxContainer}>
          <Checkbox
            style={styles.checkBox}
            value={isChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text
            style={[
              styles.text,
              { textDecorationLine: isChecked ? 'line-through' : 'none' },
            ]}>
            {task.title}
          </Text>
        </View>
        <TouchableOpacity onPress={()=>removeTask(task.id)}>
          <AntDesign name="delete" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#f3f3f3',
    margin: 5,
    width: '90%',
  },
  checkBoxContainer: {
    width: '90%',
    flexDirection: 'row',
  },
  checkBox: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});
export default Task;
