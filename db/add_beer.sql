INSERT INTO beers
    (beername, beerstyle, abv, brewery_id)
VALUES
    ($1, $2, $3, $4);

SELECT *
FROM beers