import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPath = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p>Invalid link, does not exsit !</p>
        <Link to="/" className="btn btn-danger">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPath;
