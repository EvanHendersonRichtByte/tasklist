const axios = require("axios");
export default function Task({ _id, title, description, deadline }) {
  const deleteTask = (e) => {
    e.preventDefault();
    axios
      .delete(`https://tasklist1a.herokuapp.com/task/${_id}`)
      .then(() => window.location.reload())
      .catch((err) => {
        throw err;
      });
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
          <h6 className="d-inline align-middle text-end ms-auto">
            Tenggat: {new Date(deadline).toDateString()}
          </h6>
        </div>
      </button>
      <div className="form">
        <form
          className="d-flex align-items-center"
          onSubmit={deleteTask.bind(_id)}
        >
          <button
            type="submit"
            className="btn-close"
            aria-label="Close"
          ></button>
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
    </li>
  );
}
