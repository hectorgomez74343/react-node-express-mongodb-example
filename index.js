const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoPractice = require("./mongo");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("build"));

app.post("/orders", mongoPractice.createOrder);

app.put("/order", mongoPractice.updateOrder);

app.get("/orders", mongoPractice.getOrders);

app.get("/order", mongoPractice.getOrder);

app.delete("/order", mongoPractice.deleteOrder);

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});
