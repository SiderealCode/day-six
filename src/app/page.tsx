"use client";
import { useState, useEffect } from "react";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();

      setPokemons(data.results);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {pokemons.map(({ name, url }) => (
        <li key={url}>{name}</li>
      ))}
    </ul>
  );
}
