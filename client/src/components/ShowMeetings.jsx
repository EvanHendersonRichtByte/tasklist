import axios from "axios";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
export default function ShowMeetings() {
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
  besok = hari[currentDay - 7];

  const jadwalHariIni = () => {
    state.map((item) => item.__EMPTY === hariIni && console.log(item));
  };

  const jadwalBesok = () => {
    state.map((item) => item.__EMPTY === besok && console.log(item));
  };

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
