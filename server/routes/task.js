const Task = require("../models/Task");
module.exports = task = (app) => {
  app.post("/task", (req, res) => {
    Task.create(req.body)
      .then(() => res.send("Successfully Created"))
      .catch((err) => {
        throw err;
      });
  });

  app.get("/task", (req, res) => {
    Task.find({}, (err, data) => {
      if (err) console.log(err);
      res.send(data);
    });
  });

  app.put("/task/:id", (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, () => {
      try {
        res.send("♣updated");
      } catch (err) {
        throw err;
      }
    });
  });

  app.delete("/task/:id", (req, res) => {
    Task.deleteOne({ _id: req.params.id }, () => {
      res.send("Data deleted");
    });
  });
};
