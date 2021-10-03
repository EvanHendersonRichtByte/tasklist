import ReactExport from "react-data-export";
import axios from "axios";
import { useEffect, useState } from "react";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function DownloadBackup() {
  const [state, setState] = useState({});
  useEffect(() => {
    axios
      .get("https://tasklist1a.herokuapp.com/task/")
      .then(({ data }) => {
        setState(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ExcelFile
      element={
        <button className="btn btn-transparent text-success">
          <i className="bi bi-download"></i> Download Backup
        </button>
      }
    >
      <ExcelSheet data={state} name="Tasks">
        <ExcelColumn label="Title" value="title" />
        <ExcelColumn label="Description" value="description" />
      </ExcelSheet>
    </ExcelFile>
  );
}
