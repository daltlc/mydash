  
import React from 'react';
import { Link } from "react-router-dom";


function ExamplePage() {
  return (
    <div>
      <h1>General User Example</h1>
        <Link to={'/'}>
          General User Dashboard
        </Link>
       
    </div>
  );
}

export default ExamplePage;