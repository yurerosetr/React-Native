import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: 'blue',
  },
  title:{
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  }
});

export default Header;
