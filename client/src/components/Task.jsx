import { useState } from "react";
const axios = require("axios");
export default function Task({ _id, title, description, deadline }) {
  const [state, setState] = useState({
    _id: "",
    title: "",
    description: "",
  });
  const deleteTask = (e) => {
    e.preventDefault();
    axios
      .delete(`https://tasklist1a.herokuapp.com/task/${_id}`)
      .then(() => window.location.reload())
      .catch((err) => {
        throw err;
      });
  };
  const onChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const editModal = (_id, title, description) =>
    setState({ ...state, _id, title, description });

  const cancelUpdate = () => {
    setState({
      _id: "",
      title: "",
      description: "",
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://tasklist1a.herokuapp.com/task/${state._id}`,
        ({ title, description } = state)
      )
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <li className="border-start border-5 border-top-0 border-end-0 border-bottom-0 border-primary list-group-item d-flex justify-content-between align-items-center mb-2 shadow">
      <button
        className="btn w-100 btn-transparent text-start"
        data-bs-toggle="modal"
        data-bs-target={`#task${_id}`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="title d-inline align-middle">{title}</h5>
        </div>
      </button>
      <div className="form d-flex">
        <button
          className="btn btn-transparent text-primary"
          onClick={() => editModal(_id, title, description)}
          data-bs-toggle="modal"
          data-bs-target={`#edit${_id}`}
        >
          <i className="bi bi-pen"></i>
        </button>
        <form
          className="d-flex align-items-center"
          onSubmit={deleteTask.bind(_id)}
        >
          <button
            type="submit"
            className="btn btn-transparent text-danger"
            aria-label="Close"
          >
            <i className="bi bi-trash"></i>
          </button>
        </form>
      </div>
      <div
        className="modal fade"
        id={`task${_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{description}</div>
            {/* <div className="modal-footer">
              <p className="me-auto">{new Date(deadline).toDateString()}</p>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id={`edit${_id}`}
        tabIndex="-1"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={onSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Ubah Data</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cancelUpdate}
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
                    <label
                      htmlFor="description"
                      className="form-label"
                      required
                    >
                      Deskripsi
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="description"
                      value={state.description}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={cancelUpdate}
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
    </li>
  );
}
