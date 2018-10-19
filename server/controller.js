module.exports = {
  addBeer: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { beername, beerstyle, abv, brewery_id } = req.body;

    dbInstance
      .add_beer([beername, beerstyle, abv, brewery_id])
      .then(response => res.status(200).send(response))
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },

  addBrewery: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { brewery_name, brewery_state, brewery_id } = req.body;

    dbInstance
      .add_brewery([brewery_name, brewery_state, brewery_id])
      .then(response => res.status(200).send(response.data))
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },

  getBeers: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_beers()
      .then(response => res.status(200).json(response))
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  }
};
