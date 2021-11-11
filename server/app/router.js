import Router from "express";
import client from "./db/connections/client.js";
import config from "./config.js";

const collection = client.db(config.db.name).collection(config.db.collection);

const router = new Router();

// localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello from API router!");
});

export default router;
