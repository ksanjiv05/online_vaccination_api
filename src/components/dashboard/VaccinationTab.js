import React from "react";
import VaccinationContaint from "./VaccinationContaint";
import VaccinationContaintBody from "./VaccinationContaintBody";

const VaccinationTab = () => {
  return (
    <div className="vacc-background">
      <ul className="nav nav-tabs">
        <VaccinationContaint
          herfid="home"
          title="sanjiv"
          activeClass="active"
        />
        <VaccinationContaint herfid="menu1" title="vinay" />
      </ul>
      <div className="tab-content">
        <VaccinationContaintBody
          herfid="home"
          activeClass="in active"
          title="sanjiv"
        />
        <VaccinationContaintBody herfid="menu1" title="vinay" />
      </div>
    </div>
  );
};

export default VaccinationTab;
