import React from 'react';
import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import './Users.css';

export function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div className="users-page">
      <Layout>
        {users.map((user) => {
          return (
            <div>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </div>
          );
        })}
      </Layout>
    </div>
  );
}
