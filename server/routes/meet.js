const XLSX = require("xlsx");
module.exports = meet = (app) => {
  app.get("/meet", (req, res) => {
    let workbook = XLSX.readFile("./assets/files/MI-1A.xlsx");
    const form = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[3]]
    );
    res.send(form);
  });
};
