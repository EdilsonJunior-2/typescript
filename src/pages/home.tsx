import { useEffect, useState } from "react";
import { res, Pokemon } from "../interfaces/home";
import { getPokemonList, getPokemonData } from "../services/api";
import {
  PokeList,
  PokeBox,
  PokeName,
  PokeImg,
  PokeType,
  FlexBoxCol,
  PaginationBox,
} from "../styles/home";
import { Fade, Pagination } from "@mui/material";

const Home = () => {
  const [pokemonCount, setPokemonCount] = useState(1);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [change, setChange] = useState(false);
  const [fade, setFade] = useState(false);
  const limit = 21;

  useEffect(() => {
    const promises: Array<Promise<Pokemon>> = [];
    setFade(false);
    setChange(!change);
    getPokemonList({ limit: limit, offset: offset }).then((props: res) => {
      setPokemonCount(props.count);

      props.results.map((pokemon) => {
        promises.push(getPokemonData(pokemon.name));
      });

      Promise.all(promises).then((res: Array<Pokemon>) => {
        setPokemonList(res);
        setFade(true);
        console.log(res);
      });
    });
  }, [offset]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    value && setOffset((value - 1) * limit);
  };

  return (
    <>
      <PokeList>
        {pokemonList.map((pokemon) => (
          <Fade in={fade} key={pokemon.species.url}>
            <PokeBox>
              <PokeName>{pokemon.name}</PokeName>
              <FlexBoxCol>
                {pokemon.types.map((type) => (
                  <PokeType key={type.type.url} typeName={type.type.name}>
                    {type.type.name}
                  </PokeType>
                ))}
              </FlexBoxCol>
              <PokeImg
                src={pokemon.sprites["front_default"]}
                alt={pokemon.species.name}
              />
            </PokeBox>
          </Fade>
        ))}
      </PokeList>
      <PaginationBox>
        <Pagination
          size="small"
          count={Math.ceil(pokemonCount / limit)}
          onChange={handleChange}
        />
      </PaginationBox>
    </>
  );
};

export default Home;
