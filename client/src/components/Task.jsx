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
      <p>{title}</p>
      <form onSubmit={deleteTask.bind(_id)}>
        <button
          type="submit"
          className="btn-close ms-auto"
          aria-label="Close"
        ></button>
      </form>
    </li>
  );
}
