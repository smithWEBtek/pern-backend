const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
