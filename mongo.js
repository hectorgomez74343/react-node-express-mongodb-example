const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const url =
  "mongodb+srv://admin:admin@cluster0.m6n2l.mongodb.net/products-potato?retryWrites=true&w=majority";

const createOrder = async (req, res, next) => {
  if (req.body.params.password) {
    const {
      password,
      name,
      lastName,
      time,
      type,
      phoneNumber,
      email,
      address,
    } = req.body.params;
    const decryptedPassword = Buffer(password, "base64");
    const decryptedPasswordText = decryptedPassword.toString("utf-8");

    if (decryptedPasswordText === "serverpassword") {
      const newOrder = {
        name,
        lastName,
        time,
        type,
        phoneNumber,
        email,
        address,
      };
      const client = new MongoClient(url);

      try {
        await client.connect();
        const db = client.db();
        await db.collection("orders").insertOne(newOrder);
      } catch (error) {
        return res
          .status(400)
          .send("Something wrong, please check the data you sent to the api");
      }
      client.close();

      res.json(newOrder);
    }
  }
  return res.status(401).send("You need a password to create an order");
};

const getOrders = async (req, res, next) => {
  if (req.query.password) {
    const { password } = req.query;
    const decryptedPassword = Buffer(password, "base64");
    const decryptedPasswordText = decryptedPassword.toString("utf-8");

    if (decryptedPasswordText === "serverpassword") {
      const client = new MongoClient(url);

      let orders;

      try {
        await client.connect();
        const db = client.db();
        orders = await db.collection("orders").find().toArray();
      } catch (error) {
        return res
          .status(400)
          .send("Something wrong, please check the data you sent to the api");
      }
      client.close();

      res.json(orders);
    }
  }

  return res.status(401).send("You need a password to get orders");
};

const getOrder = async (req, res, next) => {
  if (req.query.password) {
    const { password, id } = req.query;
    const decryptedPassword = Buffer(password, "base64");
    const decryptedPasswordText = decryptedPassword.toString("utf-8");

    if (decryptedPasswordText === "serverpassword") {
      const client = new MongoClient(url);

      let order;
      try {
        await client.connect();
        const db = client.db();
        order = await db.collection("orders").findOne({
          $or: [{ _id: new ObjectID(id) }],
        });
      } catch (error) {
        return res
          .status(400)
          .send("Something wrong, please check the data you sent to the api");
      }

      client.close();

      res.json(order);
    }
  }
  return res.status(401).send("You need a password to get an order");
};

const deleteOrder = async (req, res, next) => {
  if (req.query.password) {
    const { password, id } = req.query;
    const decryptedPassword = Buffer(password, "base64");
    const decryptedPasswordText = decryptedPassword.toString("utf-8");

    if (decryptedPasswordText === "serverpassword") {
      const client = new MongoClient(url);

      try {
        await client.connect();
        const db = client.db();
        await db.collection("orders").deleteOne({ _id: new ObjectID(id) });
      } catch (error) {
        return res
          .status(400)
          .send("Something wrong, please check the data you sent to the api");
      }

      client.close();

      res.json({ message: "Deleted successfuly" });
    }
  }
  return res.status(401).send("You need a password to delete an order");
};

const updateOrder = async (req, res, next) => {
  if (req.query.password) {
    const {
      name,
      lastName,
      time,
      type,
      phoneNumber,
      email,
      address,
      password,
      id,
    } = req.query;
    const newOrder = {
      name,
      lastName,
      time,
      type,
      phoneNumber,
      email,
      address,
    };
    const decryptedPassword = Buffer(password, "base64");
    const decryptedPasswordText = decryptedPassword.toString("utf-8");
    if (decryptedPasswordText === "serverpassword") {
      const client = new MongoClient(url);

      try {
        await client.connect();
        const db = client.db();
        await db
          .collection("orders")
          .replaceOne({ _id: new ObjectID(id) }, newOrder);
      } catch (error) {
        return res
          .status(400)
          .send("Something wrong, please check the data you sent to the api");
      }
      client.close();

      res.json({ message: "Updated successfuly" });
    }
  }
  return res.status(401).send("You need a password to update an order");
};

exports.createOrder = createOrder;
exports.getOrders = getOrders;
exports.deleteOrder = deleteOrder;
exports.getOrder = getOrder;
exports.updateOrder = updateOrder;
