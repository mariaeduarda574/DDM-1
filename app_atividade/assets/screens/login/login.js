import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './estilo';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View accessible accessibilityLabel="Símbolo de aranha" style={styles.logo}>
          <View style={[styles.perna, styles.pernaEsquerdaSuperior]} />
          <View style={[styles.perna, styles.pernaEsquerdaMediaSuperior]} />
          <View style={[styles.perna, styles.pernaEsquerdaMediaInferior]} />
          <View style={[styles.perna, styles.pernaEsquerdaInferior]} />
          <View style={[styles.perna, styles.pernaDireitaSuperior]} />
          <View style={[styles.perna, styles.pernaDireitaMediaSuperior]} />
          <View style={[styles.perna, styles.pernaDireitaMediaInferior]} />
          <View style={[styles.perna, styles.pernaDireitaInferior]} />
          <View style={styles.cabecaAranha} />
          <View style={styles.corpoAranha} />
        </View>

        <Text style={styles.titulo}>Login</Text>
        <Text style={styles.subtitulo}>Entre na teia</Text>

        <Text style={styles.label}>Digite o e-mail</Text>

        <TextInput
          nativeID="email"
          placeholder="fulano@hotmail.com"
          
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry
        />

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Home')}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}