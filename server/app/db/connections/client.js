import { MongoClient } from "mongodb"; // 'M...' means use with 'new'.
import config from "../../config.js";

const client = new MongoClient(config.db.clientURL);

client
  .connect()
  .then(() => {
    console.info("MongoDB Client 🏃🏾‍♂️");
  })
  .catch((err) => {
    console.error("Error starting MongoDB Client", err.message);

    // Exit process with failure
    process.exit(1); // an error exit (node)
  });
export default client;
