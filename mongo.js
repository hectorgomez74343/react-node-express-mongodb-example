const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const url =
  "mongodb+srv://admin:admin@cluster0.m6n2l.mongodb.net/products-potato?retryWrites=true&w=majority";

const createOrder = async (req, res, next) => {
  const newOrder = {
    name: req.body.name,
    lastName: req.body.lastName,
    time: req.body.time,
    type: req.body.type,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    await db.collection("orders").insertOne(newOrder);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();

  res.json(newOrder);
};

const getOrders = async (req, res, next) => {
  const client = new MongoClient(url);

  let orders;

  try {
    await client.connect();
    const db = client.db();
    orders = await db.collection("orders").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve orders." });
  }
  client.close();

  res.json(orders);
};

const getOrder = async (req, res, next) => {
  const client = new MongoClient(url);
  const id = new ObjectID(req.body.id);
  let order;
  try {
    await client.connect();
    const db = client.db();
    order = await db.collection("orders").findOne({
      $or: [{ _id: id }],
    });
  } catch (error) {
    return res.json({ message: "Could not retrieve order." });
  }

  client.close();

  res.json(order);
};

const deleteOrder = async (req, res, next) => {
  const client = new MongoClient(url);
  const id = new ObjectID(req.body.id);

  try {
    await client.connect();
    const db = client.db();
    await db.collection("orders").deleteOne({ _id: id });
  } catch (error) {
    return res.json({ message: "Could not delete order." });
  }

  client.close();

  res.json({ message: "Deleted successfuly" });
};

const updateOrder = async (req, res, next) => {
  const newOrder = {
    name: req.body.name,
    lastName: req.body.lastName,
    time: req.body.time,
    type: req.body.type,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
  };
  const client = new MongoClient(url);
  const id = new ObjectID(req.body.id);

  try {
    await client.connect();
    const db = client.db();
    await db.collection("orders").replaceOne({ _id: id }, newOrder);
  } catch (error) {
    return res.json({ message: "Could not update data." });
  }
  client.close();

  res.json({ message: "Updated successfuly" });
};

exports.createOrder = createOrder;
exports.getOrders = getOrders;
exports.deleteOrder = deleteOrder;
exports.getOrder = getOrder;
exports.updateOrder = updateOrder;
