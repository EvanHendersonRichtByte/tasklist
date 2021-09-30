// const axios = require("axios");

export default function Task({ title = "s", description, deadline }) {
  return (
    <li className="list-group-item d-flex align-items-center mb-2">
      <p>{title}</p>
      <button
        type="button"
        className="btn-close ms-auto"
        aria-label="Close"
      ></button>
    </li>
  );
}
