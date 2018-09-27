const fs = require("fs");
const csv = require("fast-csv");

//fillup products
let products = [];
let stream = fs.createReadStream("./products.csv");
let csvStream = csv({ delimiter: "," })
  .on("data", function(data) {
    products.push({
      nombre: data[2],
      modelo: data[6],
      precio: data[5],
      marca: data[11],
      imagen: data[10],
      category: data[6]
    });
  })
  .on("end", function() {
    fs.writeFile(`productos.json`, JSON.stringify(products), "utf8", function(
      err
    ) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
  });
stream.pipe(csvStream);
