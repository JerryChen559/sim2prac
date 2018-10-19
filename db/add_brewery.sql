INSERT INTO breweries
    (brewery_name, brewery_state, brewery_id)
VALUES
    ($1, $2, $3);

select *
from breweries