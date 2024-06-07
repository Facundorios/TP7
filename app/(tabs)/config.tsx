import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const Config = () => {
  const [pokemonImage, setPokemonImage] = useState<string | null>(null);
  const [pokemonName, setPokemonName] = useState<string | null>(null);

  const fetchPokemonImage = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 151) + 1; // Genera un número aleatorio entre 1 y 151
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
      );
      const data = await response.json();
      setPokemonImage(data.sprites.other.showdown.front_default);
      setPokemonName(data.name);
    } catch (error) {
      console.error("Error al obtener la imagen del Pokémon:", error);
    }
  };

  return (
    <ThemedView>
      <Button onPress={fetchPokemonImage}>Generar número aleatorio</Button>
      {pokemonImage && (
        <Image source={{ uri: pokemonImage }} style={styles.pokemon} />
      )}
      {pokemonName && (
        <ThemedText>
          {pokemonName.toUpperCase()} TE SALUDA (tu pokemon de la suerte)
        </ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  pokemon: {
    width: 100,
    height: 100,
  },
});

export default Config;
