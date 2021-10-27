import axios from "axios";

interface getProps {
  limit: number;
  offset: number;
}

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function getPokemonList(props: getProps) {
  const response = await api.get(
    "pokemon?limit=" + props.limit + "&offset=" + props.offset
  );
  return response.data;
}

export async function getPokemonData(name: string) {
  const response = await api.get(`/pokemon/${name}`);
  return response.data;
}
