import React from 'react';
import { Link } from 'react-router-dom';

const FactsList = ({ facts }) => {
  return (
    <>
      {facts.map((fact) => (
        <Link
          className='fact-list-item'
          to={`/facts/${fact.username}&${fact.number}`}
          key={fact.id}
        >
          <h3>{fact.title}</h3>
          <p>{fact.content[0].substring(0, 150)}...</p>
          <br />
        </Link>
      ))}
    </>
  );
};

export default FactsList;
