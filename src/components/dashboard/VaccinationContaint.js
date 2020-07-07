import React from "react";

const VaccinationContaint = ({ herfid, title, activeClass }) => {
  return (
    <li className={activeClass}>
      <a data-toggle="tab" href={"#" + herfid}>
        {title}
      </a>
    </li>
  );
};

export default VaccinationContaint;
