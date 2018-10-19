const axios = require("axios");

const GET_BEERS = "GET_BEERS";

export function getBeers() {
  return {
    type: GET_BEERS,
    payload: axios
      .get("http://localhost:3005/api/beers")
      .then(response => response.data)
  };
}
const initialState = {
  beers: []
};

export default function beerReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_BEERS}_FULFILLED`:
      return {
        ...state,
        beers: action.payload
      };

    default:
      return state;
  }
}
