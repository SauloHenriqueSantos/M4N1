import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';


const App = () => {
  // Estado para armazenar a lista de fornecedores
  const [fornecedores, setFornecedores] = useState([]);
  // Estado para armazenar os detalhes do fornecedor sendo adicionado
  const [novoFornecedor, setNovoFornecedor] = useState({
    nome: '',
    endereco: '',
    contato: '',
    categorias: '',
    imagem: ''
  });

  // Função para lidar com a adição de um novo fornecedor
  const adicionarFornecedor = () => {
    // Adiciona o novo fornecedor à lista de fornecedores
    setFornecedores([...fornecedores, novoFornecedor]);
    // Limpa os detalhes do fornecedor após a adição
    setNovoFornecedor({
      nome: '',
      endereco: '',
      contato: '',
      categorias: '',
      imagem: ''
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Cadastro de Fornecedores</Text>

      {/* Formulário para adicionar um novo fornecedor */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={novoFornecedor.nome}
          onChangeText={(text) => setNovoFornecedor({ ...novoFornecedor, nome: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={novoFornecedor.endereco}
          onChangeText={(text) => setNovoFornecedor({ ...novoFornecedor, endereco: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Contato"
          value={novoFornecedor.contato}
          onChangeText={(text) => setNovoFornecedor({ ...novoFornecedor, contato: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Categorias"
          value={novoFornecedor.categorias}
          onChangeText={(text) => setNovoFornecedor({ ...novoFornecedor, categorias: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={novoFornecedor.imagem}
          onChangeText={(text) => setNovoFornecedor({ ...novoFornecedor, imagem: text })}
        />
        <TouchableOpacity style={styles.button} onPress={adicionarFornecedor}>
          <Text style={styles.buttonText}>Adicionar Fornecedor</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de fornecedores cadastrados */}
      <View style={styles.lista}>
        {fornecedores.map((fornecedor, index) => (
          <View key={index} style={styles.fornecedor}>
            <Image source={{ uri: fornecedor.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{fornecedor.nome}</Text>
            <Text>{fornecedor.endereco}</Text>
            <Text>{fornecedor.contato}</Text>
            <Text>{fornecedor.categorias}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  form: {
    width: '100%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  lista: {
    marginTop: 20,
    width: '100%'
  },
  fornecedor: {
    marginBottom: 20
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  nome: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default App;
