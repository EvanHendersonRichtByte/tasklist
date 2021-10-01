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
    <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
      <button
        className="btn w-100 btn-transparent text-start"
        data-bs-toggle="modal"
        data-bs-target={`#task${_id}`}
      >
        <h4 className="d-inline align-middle text-primary">{title}</h4>
      </button>
      <div className="form">
        <form
          className="d-flex align-items-center"
          onSubmit={deleteTask.bind(_id)}
        >
          <button
            type="submit"
            className="btn-close ms-auto"
            aria-label="Close"
          ></button>
        </form>
      </div>
      <div
        class="modal fade"
        id={`task${_id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{description}</div>
            <div class="modal-footer">
              <p className="me-auto">{new Date(deadline).toDateString()}</p>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
