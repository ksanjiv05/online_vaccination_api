import React, { useState } from "react";
import VaccinationTab from "./VaccinationTab";
import NewApplicant from "./new_applicant/NewApplicant";

const Vaccination = () => {
  const [tabState, setTabState] = useState(false);
  const handelTab = () => {
    setTabState(true);
  };
  return (
    <>
      {tabState ? (
        <>
          <div className="new-applicant">
            <button
              className="btn btn-success form-control"
              onClick={() => setTabState(false)}>
              <span class="glyphicon glyphicon-arrow-left"></span> Back To Main
            </button>
          </div>
          <NewApplicant />
        </>
      ) : (
        <>
          <div className="new-applicant">
            <button
              className="btn btn-success form-control"
              onClick={handelTab}>
              <span class="glyphicon glyphicon-plus"></span> Add New Applicant
            </button>
          </div>
          <VaccinationTab />
        </>
      )}
    </>
  );
};
export default Vaccination;
