import { View, Text, Pressable } from 'react-native';

import styles from './estilo';

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Peter Parker</Text>
        <Text style={styles.mensagem}>
          Um herói de Nova York com habilidades extraordinárias.
        </Text>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Origem</Text>
          <Text style={styles.textoSecao}>
            Nos quadrinhos da Marvel, Peter Parker ganha habilidades
            aracnídeas após ser picado por uma aranha radioativa.
          </Text>
        </View>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Primeira aparição</Text>
          <Text style={styles.textoSecao}>
            O personagem estreou em Amazing Fantasy #15, publicado em 1962.
          </Text>
        </View>

        <Text style={styles.fonte}>
          Fonte: marvel.com/characters/spider-man-peter-parker
        </Text>

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Tela2')}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Conhecer habilidades</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Home')}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Voltar para Home</Text>
        </Pressable>
      </View>
    </View>
  );
}