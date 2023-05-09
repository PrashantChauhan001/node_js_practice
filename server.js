const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

// contact route
app.use("/api/contact", require("./routes/contactRoutes"));

app.get("/", (req, res) =>
  res.status(200).json({ message: "root of the apis" })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
