import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    clientURL: process.env.DB_CLIENT_URL,
    collection: "contacts",
    name: "contacts",
  },
  port: process.env.PORT || 3000,
};
