import { Text, View, StyleSheet, Button } from "react-native";
import { Link, router } from 'expo-router';

export default function Home() {

  function handleNavigation(){
    
    router.replace('/dashboard');
  }

  return(
    <View style={styles.container}>
      <Text>Página HOME</Text>
      <Link href={'/profile'}>Ir para tela Profile</Link>
      <Link href={'/user/12345'}>Ir para tela User</Link>

      <Button title="Navegar para o Painel" onPress={handleNavigation} />
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