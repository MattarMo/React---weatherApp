import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPath = () => {
  return (
    <div>
      <p>wrong link, does not exsit !</p>
      <Link to="/" className="btn btn-danger">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPath;
