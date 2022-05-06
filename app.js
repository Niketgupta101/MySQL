const express = require("express");

const app = express();

app.use(express.json());

const port = 8000;
const connection = require("./server");

app.get("/customerWithAddress", (req, res) => {
  // Inner Join customer table and address table using address_id
  var sql = `
    SELECT *
    FROM customer
    JOIN address
        USING (address_id);
    `;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/customerWithAddressWithCity", (req, res) => {
  // Inner Join customer table and address table using address_id
  var sql = `
      SELECT *
      FROM customer
      JOIN address
        USING (address_id)
      JOIN city
        USING (city_id);
      `;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
