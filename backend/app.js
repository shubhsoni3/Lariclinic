const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { join, dirname } = require("path");
const authRoute = require("./routes/authRoute");

dotenv.config();
// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoute);

// app.use(express.static(join(__dirname, "build")));

// app.get("*", (req, res, next) => {
//   // If the request is for an API route, skip serving the React HTML file
//   if (req.url.startsWith('/api')) {
//     return next();
//   }

//   // Otherwise, serve the React HTML file
//   res.sendFile(join(__dirname, "build", "index.html"));
// });

// PORT
const PORT = process.env.PORT || 4000;

// run listen
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
