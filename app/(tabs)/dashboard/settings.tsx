import { Text, View, StyleSheet } from "react-native";

export default function Settings() {
  return(
    <View style={styles.container}>
      <Text>Página CONFIGURAÇÃO</Text>
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