module.exports = profile = (app) => {
  app.post("/profile", (req, res) => {
    res.send("Profile Add Route");
  });

  app.get("/profile", (req, res) => {
    res.send("Profile Main Route");
  });

  app.put("/profile/:id", (req, res) => {
    res.send("Edit data");
  });

  app.delete("/profile/:id", (req, res) => {
    res.send("Delete data");
  });
};
