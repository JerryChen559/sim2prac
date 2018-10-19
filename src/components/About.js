import React, { Component } from "react";
import { connect } from "react-redux";
import { getBeers } from "../ducks/reducer";

class About extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    this.props.getBeers();
  }
  render() {
    this.display = this.props.state.beers.map((e, i) => {
      return (
        <div key={i}>
          {e.beername}
          {e.beerstyle}
          {e.abv}
        </div>
      );
    });

    return <div>{this.display}</div>;
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(
  mapStatetoProps,
  { getBeers }
)(About);
