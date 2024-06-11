import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const User = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');

  return (
    <div>
      <h1>User</h1>
      <p>User ID: {userId}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default User;
