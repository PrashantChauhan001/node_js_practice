const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

// add req's body stream into the req.body where content-type is json
app.use(express.json());

// contact route
app.use("/api/contacts", require("./routes/contactsRoute"));

app.get("/", (req, res) =>
  res.status(200).json({ message: "root of the apis" })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
