import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button  } from 'react-native';

export default function App() {
  return (
    

      <View style={styles.container}>
        <ScrollView>
          <Text>Digite aqui </Text>
          <TextInput placeholder='teste'></TextInput>
          <Button onPress='' title='botão'></Button>
        </ScrollView>
      </View>

    
    
  );
}

const styles = StyleSheet.create({
  scflex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#999898',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
