require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const app = express();
const cors = require("cors");
app.use(json());
app.use(cors());
const port = 3005;
const { addBeer } = require("./controller");
const { addBrewery } = require("./controller");
const { getBeers } = require("./controller");

massive(process.env.STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);

    // dbInstance
    //   .create_table()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
  })
  .catch(error => console.log(error));

app.post("/api/beers", addBeer);
app.post("/api/brewery", addBrewery);
app.get("/api/beers", getBeers);

app.listen(port, () => console.log(`Listening on ${port}`));
