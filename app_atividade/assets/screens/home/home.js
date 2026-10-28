import { View, Text, Pressable } from 'react-native';

import styles from './estilo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Nova York precisa de você</Text>
        <Text style={styles.mensagem}>
          Explore a história de Peter Parker e os recursos do herói aracnídeo.
        </Text>

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Tela1')}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Conhecer Peter Parker</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Tela2')}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Ver habilidades</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Login')}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Sair</Text>
        </Pressable>
      </View>
    </View>
  );
}
