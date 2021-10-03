import { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function AddTask() {
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const onChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const quillChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      description: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("https://tasklist1a.herokuapp.com/task/", state).then(() => {
      window.location.reload();
    });
  };
  return (
    <div
      className="modal fade"
      id="tambahData"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={onSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Tambah Data</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Judul
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={state.title}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label" required>
                    Deskripsi
                  </label>
                  {/* <textarea
                    className="form-control"
                    rows="3"
                    name="description"
                    value={state.description}
                    onChange={onChange}
                    required
                  /> */}
                  <ReactQuill
                    value={state.description}
                    onChange={quillChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                <i className="bi bi-check2"></i> Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
