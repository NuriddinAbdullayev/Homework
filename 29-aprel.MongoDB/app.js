const express = require("express");
const connectDB = require("./config/db");
const routeBooks = require("./routes/routeBooks");
const routeUsers = require("./routes/routeUsers");
const routeOTP = require("./routes/routeOTP");

const app = express();
const PORT = 3000;

app.use(express.json());
connectDB();

app.use("/", routeBooks);
app.use("/", routeUsers);
app.use("/", routeOTP);

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});