import React from 'react';
import { useParams } from 'react-router-dom';
import facts from './fact-content';

const FactPage = () => {
  const { factId } = useParams();
  const fact = facts.find(
    (fact) => `${fact.username}&${fact.number}` === factId
  );

  return (
    <>
      <h1>{fact.title}</h1>
      {fact.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
};

export default FactPage;
