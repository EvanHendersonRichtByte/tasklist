module.exports = function (app, express, mongoose) {
  const port = process.env.PORT || 8080 ;
  main()
    .catch((err) => console.log("Can't connect to database"))
    .then(() => console.log("Database Connected"));

  async function main() {
    await mongoose.connect(process.env.MONGO_URI);
  }

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
};
