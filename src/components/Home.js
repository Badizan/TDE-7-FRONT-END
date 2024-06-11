import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'User One' },
  { id: 2, name: 'User Two' },
  { id: 3, name: 'User Three' },
];

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - <Link to={`/user?id=${user.id}`}>View User</Link>
          </li>
        ))}
      </ul>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
