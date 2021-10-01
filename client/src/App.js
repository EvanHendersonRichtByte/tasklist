import "./App.css";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("https://tasklist1a.herokuapp.com/task").then(({ data }) => {
      setState(data);
    });
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto mt-5">
            <div className="col-md-12 d-flex justify-content-between mb-4">
              <h3 className="d-inline">Tasklist</h3>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#tambahData"
              >
                <i className="bi bi-plus-lg"></i> Tambah Data
              </button>
            </div>
            <div className="col-md-12">
              <ul className="list-group">
                {state.map((item) => {
                  return <Task title={item.title} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AddTask />
    </div>
  );
}

export default App;
