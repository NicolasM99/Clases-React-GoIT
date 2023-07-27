import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from "../Image/Image";
import PokemonDescription from "../PokemonDescription/PokemonDescription";

export default class PokemonCard extends Component {
  static propTypes = {
    url: PropTypes.string,
  };

  static defaultProps = {
    url: "",
    date: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        weight: 0,
        src: "",
        type: [],
        error: "",
        loading: false,
      },
    };
  }

  async componentDidMount() {
    const { url } = this.props;
    this.setState({ ...this.state, loading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { name, weight, types, sprites } = data;
      this.setState({
        data: {
          name,
          weight,
          type: types.map((type) => type.type.name),
          src: sprites.front_default,
        },
        loading: false,
      });
    } catch (error) {
      this.setState({ ...this.state, error: error.message, loading: false });
    }
  }

  render() {
    const { data, error, loading } = this.state;
    const { date } = this.props;
    console.log({ date });
    if (error) return <h3>{error}</h3>;
    if (loading)
      return (
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
          alt="loading element"
          height={300}
        />
      );
    return (
      <div>
        <Image src={data.src} alt={data.name + "-image"} />
        <PokemonDescription date={date} data={data} />
      </div>
    );
  }
}
