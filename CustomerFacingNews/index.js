const express = require("express");
const mongoose = require("mongoose");

const port = 3400;
const app = express();

app.use(express.json());

const db = mongoose.connect(

    "mongodb://127.0.0.1:27017/News",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) =>
        err
            ? console.log("Something got wrong", err)
            : console.log("DB Connected")
);

//Routes
const newsRoutes = require("./routes/newsRoutes");
const queryRoutes = require("./routes/queryRoutes");

app.use("/api", newsRoutes);
app.use("/api", queryRoutes);

app.get("/", (req, res) => {
  res.send("App is running!!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});