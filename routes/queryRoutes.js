const express = require("express");
const router = express.Router();
const query = require("../models/queryModel");
var ObjectId = require("mongoose").Types.ObjectId;

router
  .route("/query")
  .get((req, res) => {
    query.find((err, result) => {
      if (err) throw err;
      else res.send(result);
    });
  })
  .post((req, res) => {
    query.create(req.body, (err, result) => {
      if (err) res.send("Error inserting query!!");
      else res.send({ message: "Query inserted successfully!!" });
    });
  });

router.route("/query/:id").delete((req, res) => {
  let qid = req.params.id;
  query.findByIdAndDelete(qid, (err, result) => {
    if (err) res.send("Error deleting query!!");
    else res.send({ message: "Query deleted successfully!!" });
  });
});

// router.get("/api/query", (req, res) => {
//   //db.collection(collectionName).find().toArray((err, result) => {
//   query.find((err, result) => {
//     if (err) throw err;
//     else res.send(result);
//   });
// });

module.exports = router;
