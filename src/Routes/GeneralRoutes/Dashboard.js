import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>General User Dashboard</h1>
        <Link to={'/example'}>
          General User Example
         
        </Link>
    </div>
  );
}

export default Dashboard;