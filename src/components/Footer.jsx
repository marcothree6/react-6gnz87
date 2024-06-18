import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div>
      <Link to="/about">
        <p>About</p>
      </Link>
    </div>
  );
}
