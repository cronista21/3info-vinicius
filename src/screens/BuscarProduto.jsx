import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { db } from '../config/firebase';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);

    // Realizar a busca usando o Firebase Firestore
    const collectionRef = db.collection('nomeDaSuaColecao'); // Substitua "nomeDaSuaColecao" pelo nome da coleção no Firestore

    // Fazendo uma consulta para buscar os documentos que correspondem ao texto digitado
    collectionRef
      .where('campoDeBusca', '>=', text)
      .where('campoDeBusca', '<=', text + '\uf8ff')
      .get()
      .then((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          // Adicione os documentos encontrados aos resultados
          results.push({ id: doc.id, ...doc.data() });
        });
        setSearchResults(results);
      })
      .catch((error) => {
        console.log('Erro ao buscar dados:', error);
      });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
        placeholder="Digite algo para pesquisar"
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList
        data={searchResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
}
