import React from 'react';
import { useParams } from 'react-router-dom';
import facts from './fact-content';

const FactPage = () => {
  const { factId } = useParams();
  const fact = facts.find(
    (fact) => `${fact.username}&${fact.number}` === factId
  );

  return (
    <div>
      <h1>{fact.title}</h1>
      <br />
      <div>
        {fact.content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default FactPage;
