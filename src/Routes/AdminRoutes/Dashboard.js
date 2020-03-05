  
import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
        <Link to={'/example'}>
          Admin Example
        </Link>
    </div>
  );
}

export default Dashboard;