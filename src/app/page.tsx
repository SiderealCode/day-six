import { useState, useEffect } from "react";
import { PokemonGrid } from "@/components/pokemon-grid";
export default async function Pokedex() {
  const POKEMON_API = "https://pokeapi.co/api/v2/";

  // getPokemonList -> Get the first 151 pokemon
  async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
    const data = await response.json();
    return data.results;
  }

  const pokemonList: string[] = await getPokemonList();

  return <PokemonGrid pokemonList={pokemonList} />;
  /* <ul>
      {pokemons.map(({ name, url }) => (
        <li key={url}>{name}</li>
      ))}
    </ul> */
}
