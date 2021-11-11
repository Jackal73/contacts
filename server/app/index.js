import faker from "faker";
import { promises as fs } from "fs";

fs.writeFile(
  "data.json",

  JSON.stringify(
    Array.from({ length: 500 }, () => ({
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    }))
  )
);

app.get("/", (_, res) => {
  res.send("Hello World");
});

// TODO: Use json middleware (if needed)

// TODO: Mount the routes (maybe 🤔 /api)

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
