import { Table } from "components/table";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      {/* <h1 className="dashboard-heading">Dashboard page</h1> */}
      {/* <p className="dashboard-short-desc">Overview information</p> */}
      <DashboardHeading
        title="Dashboard"
        desc="Overview dashboard monitor"
      ></DashboardHeading>
    </div>
  );
};
export default DashboardPage;