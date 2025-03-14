import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const pratos = [
  {
    id: "1",
    nome: "Salmão Grelhado",
    descricao: "Delicioso salmão grelhado com molho de ervas.",
    imagem: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-salmao-grelhado-0.jpg",
  },
  {
    id: "2",
    nome: "Bacalhau à Brás",
    descricao: "Bacalhau desfiado com batatas e ovos.",
    imagem: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-bacalhau-a-bras-0.jpg",
  },
  {
    id: "3",
    nome: "Tilápia ao Forno",
    descricao: "Filé de tilápia assado com legumes.",
    imagem: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-tilapia-ao-forno-0.jpg",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio de Peixes</Text>
      <FlatList
        data={pratos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imagem: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  descricao: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});