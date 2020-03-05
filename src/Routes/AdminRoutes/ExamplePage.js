  
import React from 'react';
import { Link } from "react-router-dom";

function ExamplePage() {
  return (
    <div>
      <h1>Admin Example</h1>
        <Link to={'/'}>
          Admin Dashboard
        </Link>
    </div>
  );
}

export default ExamplePage;