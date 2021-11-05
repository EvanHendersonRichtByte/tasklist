import axios from "axios";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
export default function ShowMeetings(pilihanJadwal) {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/meet")
      .then((response) => setState(response.data))
      .catch((err) => {
        throw err;
      });
  }, []);

  const currentDay = DateTime.now().weekday;
  let hariIni = "";
  let besok = "";
  const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  hariIni = hari[currentDay - 1];
  besok = hari[currentDay];

  const jadwal = (hari) => {
    // hari = {ini, besok}
    let res = {};
    if (hari === "ini") {
      state.map((item) => {
        if (item.__EMPTY === hariIni) Object.assign(res, item);
        return null;
      });
    } else if (hari === "besok") {
      state.map((item) => {
        if (item.__EMPTY === besok) Object.assign(res, item);
        return null;
      });
    }
    return res;
  };

  return jadwal(pilihanJadwal);
}

/** BACKUP */
// const currentDay = DateTime.now().weekdayLong;
//   const dayEng = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
