import React from 'react';
import facts from './fact-content';
import { Link } from 'react-router-dom';

const FactsListPage = () => {
  return (
    <div>
      <h1>Facts</h1>
      <br />
      {facts.map((fact) => (
        <div key={fact.id}>
          <Link
            className='fact-list-item'
            to={`/facts/${fact.username}&${fact.number}`}
            key={fact.id}
          >
            <h3>{fact.title}</h3>
            <p>{fact.content[0].substring(0, 150)}...</p>
            <br />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FactsListPage;
