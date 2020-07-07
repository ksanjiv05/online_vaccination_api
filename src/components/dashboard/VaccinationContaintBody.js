import React from "react";

const VaccinationContaintBody = ({ herfid, activeClass, title }) => {
  return (
    <div id={herfid} className={"tab-pane fade " + activeClass}>
      <div className="vacc-div">
        <h2 className="vacc-font">
          Upcoming Vaccination<span className="badge badge-ext">ORM</span>
        </h2>
        <div className="badge badge-date">02/09/2020</div>
      </div>
      <div className="vacc-div">
        <h2 className="vacc-font">Recent vacciation</h2>
        <div className="badge badge-date">02/09/2020</div>
      </div>
      <div className="vacc-div-ex">
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Vaccina</th>
                <th>Time-Period</th>
                <th>Vaccination Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="vacc-title">{title}</td>
                <td>
                  <div className="badge vacc-timeperiod">02/09/2020</div>
                </td>
                <td>
                  <div className="badge status-badge">
                    <span class="glyphicon glyphicon-ok status-icon"></span>
                    completed
                  </div>
                </td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VaccinationContaintBody;
