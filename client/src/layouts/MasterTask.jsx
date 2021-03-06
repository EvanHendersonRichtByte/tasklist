import Task from "../components/Task";
import DownloadBackup from "../components/DownloadBackup";
import axios from "axios";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function MasterTask() {
  const [state, setState] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://tasklist1a.herokuapp.com/task");
      const { data } = await res;
      setState(data);
    })();
  }, []);

  const timeFormat = () => {
    const local = DateTime.local();
    return local.toLocaleString({
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6 mx-auto mt-5 rounded bg-light shadow">
      <div className="row">
        <div className="header d-flex align-items-center justify-content-between rounded-top border-bottom-0 w-100 pt-5 pb-5 ps-3">
          <h5 className="d-inline text-light">{timeFormat()}</h5>
          <button
            type="button"
            className="btn btn-transparent text-light"
            data-bs-toggle="modal"
            data-bs-target="#tambahData"
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
      <div className="col-md-12">
        <div className="my-2 mb-3 d-flex justify-content-between align-items-center ">
          <h5>Task List</h5>
          <DownloadBackup />
        </div>
        <ul className="list-task list-group pb-1">
          {state &&
            state.map((item) => {
              return (
                <Task
                  key={item._id}
                  _id={item._id}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}
