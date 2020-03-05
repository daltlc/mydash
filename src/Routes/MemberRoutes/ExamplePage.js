  
import React from 'react';
import { Link } from "react-router-dom";

function ExamplePage() {
  return (
    <div>
      <h1>Member Example</h1>
        <Link to={'/'}>
          Member Dashboard
        </Link>
    </div>
  );
}

export default ExamplePage;