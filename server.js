const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");

require("dotenv").config();
require("./configs/dbConnection")();

const app = express();

// add req's body stream into the req.body where content-type is json
app.use(express.json());

// contact route
app.use("/api/contacts", require("./routes/contactsRoute"));
app.use("/api/users", require("./routes/userRoute"));

app.get("/", (req, res) =>
  res.status(200).json({ message: "root of the apis" })
);

// error handler to handle all the error from the app
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
