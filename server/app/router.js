import Router from "express";
import client from "./db/connections/client.js";
import config from "./config.js";

const collection = client.db(config.db.name).collection(config.db.collection);

const router = new Router();

// localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello from API router!");
});

// Get all contacts from database
router.get("/contacts", async (req, res) => {
  const allContacts = await collection.find({}).toArray();
  res.json(allContacts);
});

// ***Working on getting contacts - with parameters***
router.get("/contacts", async (req, res) => {
  const contacts = await collection
    .find({ name: { $regex: "pro", $options: "i" } })
    .toArray();

  // console.log(req.query);
  // console.log(req.params);
  res.json(contacts);
});

export default router;
