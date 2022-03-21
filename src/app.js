import React, { useEffect } from "react";
import $ from "jquery";
import { regions } from "./components/data";
import CheckBox from "./components/checkbox";
export default function App() {
  useEffect(() => {
    $(`#2 input:checkbox`).change(function () {
      var val = $(this).attr("checked");
      $(this)
        .parent()
        .find("input:checkbox")
        .each(function () {
          if (val) {
            $(this).attr("checked", "checked");
          } else {
            $(this).removeAttr("checked");
          }
        });
    });
  }, []);
  return (
    <div className="container">
      <h1>Checkboxes</h1>
      {regions[0].filterData.map((x) => {
        return <CheckBox x={x} />;
      })}
    </div>
  );
}
