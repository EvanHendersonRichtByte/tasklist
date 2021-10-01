import "./App.css";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://tasklist1a.herokuapp.com/task")
      .then(({ data }) => {
        setState(data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-5 border rounded bg-light p-3">
            <div className="col-md-12 d-flex justify-content-between mb-4">
              <h3 className="d-inline">{new Date().getUTCDate}</h3>
              <button
                type="button"
                className="btn btn-transparent text-success"
                data-bs-toggle="modal"
                data-bs-target="#tambahData"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
            <div className="col-md-12">
              <ul className="list-group">
                {state &&
                  state.map((item) => {
                    return (
                      <Task
                        key={item._id}
                        _id={item._id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                      />
                    );
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
