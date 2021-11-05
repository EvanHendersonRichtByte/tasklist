import $ from "jquery";
import { useEffect } from "react";
import showMeetings from "../functions/showMeetings";
export default function Menu() {
  useEffect(() => {
    $("input#menu").on("change", function () {
      if (this.checked === true) $("div.menu__toggler > label > span").text("");
      else $("div.menu__toggler > label > span").text("-");
    });
  });

  ((hari) => {
    const a = showMeetings("ini");
    let textA = "";
    for (let b in a) {
      const { __EMPTY, ...days } = a;
      textA += days[b] ? `${days[b]}\n` : "";
    }
    $("#jadwalHariIni > .card").text(textA ? textA : "Tidak Ada");
    const c = showMeetings("besok");
    let textB = "";
    for (let b in c) {
      const { __EMPTY, ...days } = c;
      textB += days[b] ? `${days[b]}\n` : "";
    }
    $("#jadwalBesok > .card").text(textB ? textB : "Tidak Ada");
  })();

  return (
    <>
      <div className="menu">
        <div className="menu__toggler">
          <input className="invisible" type="checkbox" id="menu" />
          <div className="menu__background">&nbsp;</div>
          <div className="menu__content">
            <ul>
              <li>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  LIHAT JADWAL
                </button>
              </li>
            </ul>
          </div>
          <label htmlFor="menu">
            <span>-</span>
          </label>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Pilih Jadwal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3">
                <a
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#jadwalHariIni"
                  role="button"
                  aria-expanded="false"
                  aria-controls="jadwalHariIni"
                >
                  Hari ini
                </a>
                <button
                  className="btn btn-success ms-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#jadwalBesok"
                  aria-expanded="false"
                  aria-controls="jadwalBesok"
                >
                  Besok
                </button>
              </div>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="jadwalHariIni">
                    <div className="card card-body border-primary"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="collapse multi-collapse" id="jadwalBesok">
                    <div className="card card-body border-success"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
