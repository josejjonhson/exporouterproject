import { Text, View, StyleSheet } from "react-native";

export default function Profile() {
  return(
    <View style={styles.container}>
      <Text>Página PROFILE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});