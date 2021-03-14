const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoPractice = require("./mongo");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("build"));

app.post("/products", mongoPractice.createProduct);

app.put("/product", mongoPractice.updateProduct);

app.get("/products", mongoPractice.getProducts);

app.get("/product", mongoPractice.getProduct);

app.delete("/product", mongoPractice.deleteProduct);

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});
