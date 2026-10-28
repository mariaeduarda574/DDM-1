import { View, Text, Pressable } from 'react-native';

import styles from './estilo';

export default function Tela2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Habilidades</Text>
        <Text style={styles.mensagem}>
          Recursos que ajudam Peter Parker a proteger a cidade.
        </Text>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Sentido aranha</Text>
          <Text style={styles.textoSecao}>
            Uma percepção aguçada que alerta Peter sobre perigos próximos e
            ajuda a reagir rapidamente.
          </Text>
        </View>

        <View style={styles.secao}>
          <Text style={styles.tituloSecao}>Agilidade e teias</Text>
          <Text style={styles.textoSecao}>
            Ele escala superfícies e se move entre prédios. Nos quadrinhos,
            também usa lançadores de teia criados por ele.
          </Text>
        </View>

        <Text style={styles.fonte}>
          Fonte: marvel.com/characters/spider-man-peter-parker
        </Text>

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Tela1')}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Voltar para Peter Parker</Text>
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