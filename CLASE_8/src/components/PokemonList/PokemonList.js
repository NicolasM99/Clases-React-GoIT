import React, { Component } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { nanoid } from "nanoid";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";

export const SEARCH_OPTIONS = [
  {
    label: "5",
    value: 5,
  },
  {
    label: "10",
    value: 10,
  },
  {
    label: "25",
    value: 25,
  },
  {
    label: "50",
    value: 50,
  },
];

export default class PokemonList extends Component {
  static defaultProps = {
    date: "",
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);

    this.state = {
      pokemonList: [],
      search: "",
      total: "25",
      error: "",
      loading: false,
    };
  }

  async handleSearch() {
    const { total, search } = this.state;
    this.setState({ ...this.state, loading: true });
    if (search) {
      this.setState({
        pokemonList: [
          {
            id: nanoid(),
            name: search,
            url: `https://pokeapi.co/api/v2/pokemon/${search
              .trim()
              .toLocaleLowerCase()}`,
          },
        ],
        loading: false,
      });
      return;
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${total}`
      );
      const data = await response.json();
      this.setState({
        pokemonList: data?.results.map((item) => ({ ...item, id: nanoid() })),
        loading: false,
      });
    } catch (error) {
      console.log({ error });
      this.setState({ ...this.state, loading: false, error: error.message });
    }
  }

  async componentDidMount() {
    await this.handleSearch();
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ ...this.state, search: value });
  }

  handleChangeSelect(event) {
    const newValue = event.target.value;
    this.setState({ ...this.state, total: newValue });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.total === this.state.total) return;
    await this.handleSearch();
  }

  render() {
    const { pokemonList, search, loading, total } = this.state;
    const { date } = this.props;
    if (loading) return <h4>Loading list...</h4>;
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Input
            value={search}
            onChange={this.handleChange}
            label="Search"
            placeholder="Pokemon name"
            name="search"
          />
          <Button onClick={async () => await this.handleSearch()}>
            Buscar
          </Button>
          <Select
            label={"total pokemons"}
            name="total"
            value={total}
            options={SEARCH_OPTIONS}
            onChange={this.handleChangeSelect}
          />
        </div>
        {pokemonList.map(({ id, url }) => (
          <PokemonCard date={date} key={id} url={url} />
        ))}
      </div>
    );
  }
}
