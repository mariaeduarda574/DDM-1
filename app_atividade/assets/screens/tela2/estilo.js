import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#091a33',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    padding: 28,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d8e1ee',
    borderRadius: 8,
    shadowColor: '#020817',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#0b2850',
  },
  mensagem: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#173a67',
  },
  secao: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f4fa',
    marginBottom: 12,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0b2850',
  },
  textoSecao: {
    fontSize: 15,
    lineHeight: 22,
    color: '#344a60',
  },
  fonte: {
    fontSize: 12,
    lineHeight: 18,
    color: '#5d6e84',
    marginBottom: 8,
  },
  botao: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#c32638',
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;