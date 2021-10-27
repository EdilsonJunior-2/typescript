export interface Pokemon {
  name: string;
  species: Specie;
  types: Array<Type>;
  sprites: Sprites;
}

export interface Specie {
  name: string;
  url: string;
}

export interface Sprites {
  ["back_default"]: string;
  ["back_female"]: string;
  ["back_shiny"]: string;
  ["back_shiny_female"]: string;
  ["front_default"]: string;
  ["front_female"]: string;
  ["front_shiny"]: string;
  ["front_shiny_female"]: string;
  other: any;
  versions: any;
}

export interface Type {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonInfo {
  sprites: Sprites;
  types: Array<Type>;
}

export interface res {
  count: number;
  results: Array<Specie>;
}
