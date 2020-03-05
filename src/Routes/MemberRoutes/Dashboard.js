import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Member Dashboard</h1>
        <Link to={'/example'}>
          Member Example
        </Link>
    </div>
  );
}

export default Dashboard;