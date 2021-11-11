import { promises as fs } from "fs";
import config from "../config.js";
import once from "./connections/once.js";

// Destructure 'db', then destructure 'name' and 'collection'.
const {
  db: { name, collection },
} = config;

(async () => {
  const conn = await once.connect();
  const data = await fs.readFile("data.json", "utf-8");

  await conn.db(name).collection(collection).deleteMany({});
  await conn.db(name).collection(collection).insertMany(JSON.parse(data));
  conn.close();
})();
