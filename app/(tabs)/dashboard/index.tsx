import { Text, View, StyleSheet, Button } from "react-native";
import { Link, router } from 'expo-router';

export default function Deshboard() {
  return(
    <View style={styles.container}>
      <Text>Página PAINEL</Text>
      <Button title="Ir para home" onPress={() => router.replace('/')} />
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