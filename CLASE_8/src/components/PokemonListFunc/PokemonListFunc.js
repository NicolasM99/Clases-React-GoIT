import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import InputFunction from "../InputFunction/InputFunction";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { SEARCH_OPTIONS } from "../PokemonList/PokemonList";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonListFunc = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState("25");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSearch = async () => {
    setLoading(true);
    if (search) {
      setPokemonList([
        {
          id: nanoid(),
          name: search,
          url: `https://pokeapi.co/api/v2/pokemon/${search
            .trim()
            .toLocaleLowerCase()}`,
        },
      ]);
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${total}`
      );
      const data = await response.json();
      setPokemonList(
        data?.results.map((item) => ({
          ...item,
          id: nanoid(),
        }))
      );
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
      setError(error.message);
    }
  };
  const handleChangeSelect = (event) => setTotal(event.target.value);

  if (loading) return <h4>Loading list...</h4>;
  return (
    <div>
      <div style={{ display: "flex" }}>
        <InputFunction
          value={search}
          onChange={(event) => handleChange(event)}
          label="Search"
          placeholder="Pokemon name"
          name="search"
        />
        <Button onClick={() => handleSearch()}>Buscar</Button>
        <Select
          label={"total pokemons"}
          name="total"
          value={total}
          options={SEARCH_OPTIONS}
          onChange={handleChangeSelect}
        />
      </div>
      {pokemonList.map(({ id, url }) => (
        <PokemonCard key={id} url={url} />
      ))}
    </div>
  );
};

export default PokemonListFunc;
