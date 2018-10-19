import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      beername: "",
      beerstyle: "",
      abv: "",
      brewery_id: "",
      brewery_name: "",
      brewery_state: "",
      brewery_id2: ""
    };
  }

  namehandler(input) {
    this.setState({ beername: input });
  }

  stylehandler(input) {
    this.setState({ beerstyle: input });
  }

  abvhandler(input) {
    this.setState({ abv: input });
  }

  idhandler(input) {
    this.setState({ brewery_id: input });
  }

  brewhandler(input) {
    this.setState({ brewery_name: input });
  }

  statehandler(input) {
    this.setState({ brewery_state: input });
  }

  idhandler2(input) {
    this.setState({ brewery_id2: input });
  }

  submitBeer() {
    const { beername, beerstyle, abv, brewery_id } = this.state;
    axios
      .post("http://localhost:3005/api/beers", {
        beername: beername,
        beerstyle: beerstyle,
        abv: abv,
        brewery_id: brewery_id
      })
      .then(
        this.setState({ beername: "", beerstyle: "", abv: "", brewery_id: "" })
      );
  }

  submitBrew() {
    const { brewery_name, brewery_state, brewery_id2 } = this.state;
    axios
      .post("http://localhost:3005/api/brewery", {
        brewery_name: brewery_name,
        brewery_state: brewery_state,
        brewery_id: brewery_id2
      })
      .then(
        this.setState({ brewery_name: "", brewery_state: "", brewery_id2: "" })
      );
  }
  render() {
    return (
      <div>
        <div className="beerinputs" />
        <input
          type="text"
          value={this.state.beername}
          placeholder="beername"
          onChange={e => this.namehandler(e.target.value)}
        />
        <input
          type="text"
          value={this.state.beerstyle}
          placeholder="beerstyle"
          onChange={e => this.stylehandler(e.target.value)}
        />
        <input
          type="number"
          value={this.state.abv}
          placeholder="abv"
          onChange={e => this.abvhandler(e.target.value)}
        />
        <input
          type="number"
          value={this.state.brewery_id}
          placeholder="brewery ID"
          onChange={e => this.idhandler(e.target.value)}
        />
        <button onClick={() => this.submitBeer()}>Submit Beer</button>

        <div className="breweryinputs">
          <input
            type="text"
            value={this.state.brewery_name}
            placeholder="brewery name"
            onChange={e => this.brewhandler(e.target.value)}
          />
          <input
            type="text"
            value={this.state.brewery_state}
            placeholder="brewery state"
            onChange={e => this.statehandler(e.target.value)}
          />
          <input
            type="text"
            value={this.state.brewery_id2}
            placeholder="brewery id"
            onChange={e => this.idhandler2(e.target.value)}
          />
          <button onClick={() => this.submitBrew()}>Submit Brewery</button>
        </div>
      </div>
    );
  }
}

export default Home;
