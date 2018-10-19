-- CREATE TABLE mytable (
--   product_id SERIAL PRIMARY KEY NOT NULL,
--   name varchar(40) NOT NULL,
--   description varchar(80) NOT NULL,
--   price integer NOT NULL,
--   image_url text NOT NULL
-- );

CREATE TABLE beers
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    beerstyle VARCHAR(50) NOT NULL,
    abv FLOAT NOT NULL,
    breweryid int
);
CREATE TABLE breweries
(
    id SERIAL PRIMARY KEY,
    brewery_name VARCHAR(50) NOT NULL,
    brewery_state VARCHAR(50) NOT NULL,
    brewery_id VARCHAR(50) NOT NULL
);