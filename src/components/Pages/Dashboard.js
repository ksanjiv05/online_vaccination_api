// import React from "react";
import Dock from "../dashboard/Dock";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "../dashboard/Profile";
import ChangePassword from "../dashboard/ChangePassword";
import Reminder from "../dashboard/Reminder";

// function Dashboard(prop) {
//   return (
//     <>
//       <div>
//         <Dock />
//       </div>
//       <div className="dashboard-space">
//         {/* {console.log(props)} */}

//         {/* <WrappedComponent /> */}
//         {/* <BrowserRouter>
//           <Switch>

//           </Switch>
//         </BrowserRouter> */}
//       </div>
//     </>
//   );
// }

// export default Dashboard;

import React from "react";
import Vaccination from "../dashboard/Vaccination";

const Dashboard = (props) => {
  return (
    <>
      <div>
        <Dock />
      </div>
      <div className="dashboard-space">
        {console.log(props.comp)}
        {props.comp}
        <Switch>
          <Route path="/dashboard/changepwd">
            <ChangePassword />
          </Route>
          {/* <Route path="/">
            <Profile />
          </Route> */}
          <Route path="/dashboard/profile">
            <Profile />
          </Route>
          <Route path="/dashboard/reminder">
            <Reminder />
          </Route>
          <Route path="/dashboard/vaccination">
            <Vaccination />
          </Route>
        </Switch>
        {/* <WrappedComponent /> */}
        {/* <BrowserRouter>
              <Switch>
                
              </Switch>
            </BrowserRouter> */}
      </div>
    </>
  );
};
export default Dashboard;
