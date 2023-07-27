import React, { Component } from "react";

import PropTypes from "prop-types";

export default class Image extends Component {
  static defaultProps = {
    src: "",
    alt: "",
    height: 200,
  };

  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.number,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { src, alt, height } = this.props;
    return <img src={src} height={height} alt={alt} />;
  }
}
