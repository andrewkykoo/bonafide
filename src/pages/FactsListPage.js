import React from 'react';
import facts from './fact-content';

const FactsListPage = () => {
  return (
    <div>
      <h1>Facts</h1>
      <br />
      {facts.map((fact) => (
        <div key={fact.id}>
          <h3>{fact.title}</h3>
          <p>{fact.content[0].substring(0, 150)}...</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default FactsListPage;
