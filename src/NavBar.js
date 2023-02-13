import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav>
      <h2>BONAFIDE</h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/facts'>Facts</Link>
        </li>
        <li>
          {user ? (
            <button
              onClick={() => {
                signOut(getAuth());
              }}
            >
              log out
            </button>
          ) : (
            <button
              onClick={() => {
                navigate('/login');
              }}
            >
              log in
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
