import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      {/* adaugam linkuri ce duc catre paginile Home, respectiv users */}
      <Link to="/"><p>Home</p></Link>
      <Link to="/users"> <p>Users</p></Link>
    </div>
  );
}
