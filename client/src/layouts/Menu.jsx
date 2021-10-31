import $ from "jquery";
import { useEffect } from "react";
export default function Menu() {
  useEffect(() => {
    $("input#menu").on("change", function () {
      if (this.checked === true) $("div.menu__toggler > label > span").text("");
      else $("div.menu__toggler > label > span").text("-");
    });
  });
  return (
    <div className="menu">
      <div className="menu__toggler">
        <input className="invisible" type="checkbox" id="menu" />
        <div className="menu__background">&nbsp;</div>
        <div className="menu__content">
          <ul>
            <li>
              <button>Coming soon</button>
            </li>
          </ul>
        </div>
        <label htmlFor="menu">
          <span>-</span>
        </label>
      </div>
    </div>
  );
}
